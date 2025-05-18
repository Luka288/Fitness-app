import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  user,
} from '@angular/fire/auth';
import { doc, Firestore } from '@angular/fire/firestore';
import { collection, getDocs, query, setDoc } from 'firebase/firestore';
import { from, map, Observable, of } from 'rxjs';
import { userInterface } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { updateCurrentUser, updateProfile } from 'firebase/auth';
import { where } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly Fire = inject(Firestore);
  private readonly FireAuth = inject(Auth);
  private readonly router = inject(Router);

  async registerUser(email: string, password: string, username: string) {
    //საჭიროა email password username
    return createUserWithEmailAndPassword(this.FireAuth, email, password).then(
      (userCred) => {
        updateProfile(userCred.user, {
          displayName: username,
        });

        this.saveUser(
          userCred.user.uid!,
          userCred.user.email || email,
          userCred.user.displayName || username
        );
      }
    );
  }

  // ჭირდება რეფაქტორი
  async loginUser(email: string, password: string) {
    return signInWithEmailAndPassword(this.FireAuth, email, password).then(
      () => {
        this.router.navigateByUrl('dashboard');
      }
    );
  }

  async saveUser(user_id?: string, user_email?: string, disName?: string) {
    const user = this.FireAuth.currentUser;
    if (!user) return;

    const firebase = doc(this.Fire, `users/${user.uid}`);

    const user_data = {
      uid: user.uid ?? user_id,
      email: user.email ?? user_email,
      displayName: user.displayName ?? disName,
      photoURL: user.photoURL ?? '',
    };

    console.log(user_data);
    const { uid, email, displayName, photoURL } = user_data;

    try {
      setDoc(firebase, { uid, email, displayName, photoURL }, { merge: true });
      return true;
    } catch (error) {
      return error;
    }
  }

  getAllUsers(): Observable<userInterface[]> {
    const userRef = collection(this.Fire, 'users');

    return from(
      getDocs(userRef).then((q) => {
        const users = q.docs.map((doc) => {
          const user = doc.data() as userInterface;

          const totalBurned = (user.activities || []).reduce(
            (total, activity) => Math.floor(total + activity.burnedCalories),
            0
          );

          return { ...user, totalBurned };
        });

        return users.sort(
          (a, b) => (b.totalBurned || 0) - (a.totalBurned || 0)
        );
      })
    );
  }

  checkUsername(username: string): Observable<boolean> {
    const userRef = collection(this.Fire, `users`);
    const userQuery = query(userRef, where('displayName', '==', username));

    return from(getDocs(userQuery)).pipe(map((snapShot) => !snapShot.empty));
  }

  async currentUser() {
    return this.FireAuth.currentUser || false;
  }
}
