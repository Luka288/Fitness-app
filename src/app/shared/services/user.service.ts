import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { collection, getDocs, query, setDoc } from 'firebase/firestore';
import { combineLatest, from, map, Observable, of } from 'rxjs';
import { userPublicData } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { where } from 'firebase/firestore';
import { AlertsService } from './alerts.service';
import { BooleanService } from './boolean.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly Fire = inject(Firestore);
  private readonly FireAuth = inject(Auth);
  private readonly router = inject(Router);
  private readonly alertService = inject(AlertsService);
  private readonly booleanService = inject(BooleanService);

  async registerUser(email: string, password: string, username: string) {
    this.booleanService.registerLoading.next(true);
    try {
      const userCred = await createUserWithEmailAndPassword(
        this.FireAuth,
        email,
        password
      );

      await updateProfile(userCred.user, { displayName: username });

      await this.storePublicInfo({
        username: userCred.user.displayName!,
        userImage: userCred.user.photoURL!,
      });

      await this.saveUser(
        userCred.user.uid,
        userCred.user.email!,
        userCred.user.displayName!
      );
      this.booleanService.isRegeisterd.next(true);
    } catch (error) {
      // maybe alert?
      throw error;
    } finally {
      this.booleanService.registerLoading.next(false);
      this.router.navigateByUrl('/dashboard');
    }
  }

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

    const { uid, email, displayName, photoURL } = user_data;

    this.storePublicInfo({ username: displayName!, userImage: photoURL! });

    try {
      setDoc(firebase, { uid, email, displayName, photoURL }, { merge: true });
      return true;
    } catch (error) {
      return error;
    }
  }

  async storePublicInfo(data: { username: string; userImage: string }) {
    const user = this.FireAuth.currentUser;
    if (!user) {
      return;
    }

    const dataToSave = {
      username: data.username,
      userImage: data.userImage,
    };

    const userRef = doc(this.Fire, `publicData/${user.uid}`);

    try {
      await setDoc(userRef, dataToSave, { merge: true });
    } catch (error) {
      console.error('Error saving public data:', error);
    }
  }

  getPublicUsers(): Observable<userPublicData[]> {
    const userRef = collection(this.Fire, `publicData`);

    return from(
      getDocs(userRef).then((q) => {
        const users = q.docs.map((doc) => {
          const user = doc.data() as userPublicData;
          return { ...user };
        });

        return users;
      })
    );
  }

  checkUserProps(
    username: string,
    email: string
  ): Observable<{ usernameTaken: boolean; emailTaken: boolean }> {
    const userRef = collection(this.Fire, 'publicData');

    const usernameQuery = query(userRef, where('username', '==', username));
    const emailQuery = query(userRef, where('email', '==', email));

    return combineLatest([
      from(getDocs(usernameQuery)),
      from(getDocs(emailQuery)),
    ]).pipe(
      map(([usernameSnap, emailSnap]) => ({
        usernameTaken: !usernameSnap.empty,
        emailTaken: !emailSnap.empty,
      }))
    );
  }

  checkUsername(username: string): Observable<boolean> {
    const publicDataRef = collection(this.Fire, 'publicData');

    const usernameQ = query(publicDataRef, where('username', '==', username));

    return from(getDocs(usernameQ)).pipe(
      map((q) => {
        return q.empty ? false : true;
      })
    );
  }

  async passwordReset(email: string) {
    try {
      sendPasswordResetEmail(this.FireAuth, email);
    } catch (error) {
      this.alertService.toast('Something went wrong', 'error', 'red');
      throw error;
    }
  }

  async currentUser() {
    return this.FireAuth.currentUser || false;
  }
}
