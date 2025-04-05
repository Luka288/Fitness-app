import { inject, Injectable } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { collectionData, doc, Firestore } from '@angular/fire/firestore';
import { collection, getDocs, setDoc } from 'firebase/firestore';
import { from, Observable, of } from 'rxjs';
import { userInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly Fire = inject(Firestore);
  private readonly FireAuth = inject(Auth);

  async saveUser() {
    const user = this.FireAuth.currentUser;
    if (!user) return;

    const firebase = doc(this.Fire, `users/${user.uid}`);

    const { uid, email, displayName, photoURL } = user;

    try {
      setDoc(firebase, { uid, email, displayName, photoURL }, { merge: true });
      return true;
    } catch (error) {
      // sweet alerts maybe?
      return error;
    }
  }

  getAllUsers(): Observable<userInterface[]> {
    const userRef = collection(this.Fire, 'users');

    return from(
      getDocs(userRef).then((q) => {
        return q.docs.map((doc) => doc.data() as userInterface);
      })
    );
  }

  async currentUser() {
    return this.FireAuth.currentUser || false;
  }
}
