import { inject, Injectable } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { doc, Firestore } from '@angular/fire/firestore';
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

  // აბრუნებს ყველა მომხმარებელს მათი აქტივობებით
  // ზრდის მიხედვით
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

  async currentUser() {
    return this.FireAuth.currentUser || false;
  }
}
