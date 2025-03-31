import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collectionData, doc, Firestore } from '@angular/fire/firestore';
import { collection, setDoc } from 'firebase/firestore';
import { of } from 'rxjs';

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

  async currentUser() {
    return this.FireAuth.currentUser || false;
  }

  getUserActivity() {
    const user = this.FireAuth.currentUser;
    if (!user) return of([]);

    const workouts = collection(this.Fire, `users/${user.uid}/workouts`);

    return collectionData(workouts, { idField: 'id' });
  }
}
