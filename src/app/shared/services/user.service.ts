import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, Firestore } from '@angular/fire/firestore';
import { setDoc } from 'firebase/firestore';

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
      console.log('user saved');
      return true;
    } catch (error) {
      // sweet alerts maybe?
      return error;
    }
  }
}
