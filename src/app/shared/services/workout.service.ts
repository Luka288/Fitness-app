import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { docData, Firestore } from '@angular/fire/firestore';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { WorkoutData } from '../interfaces/workout.data.interface';
import { AlertsService } from './alerts.service';
import { map, Observable, of } from 'rxjs';
import { calculatedData } from '../interfaces/calculate.interface';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private readonly auth = inject(Auth);
  private readonly fire = inject(Firestore);
  private readonly alerts = inject(AlertsService);

  async saveData(workoutData: calculatedData) {
    try {
      const user = this.auth.currentUser;
      if (!user) return;

      const date = new Date().toISOString().split('T')[0];

      const workoutRef = doc(this.fire, `users/${user.uid}`);

      await updateDoc(workoutRef, {
        activities: arrayUnion({
          ...workoutData,
          date: date,
          savedAt: new Date().toISOString(),
        }),
      });

      this.alerts.toast('Data saved!', 'success', '');
    } catch (error) {
      this.alerts.toast('Something went wrong try again', 'error', 'red');
    }
  }

  // ფუნქციას მოაქვს ახლანდელი მომხმარებლის ინფორმაცია
  // და აბრუნებს მხოლოდ მომხმარებლის აქტივობების მასივს
  userActivity(): Observable<calculatedData[]> {
    const user = this.auth.currentUser;
    if (!user) return of([]);

    const userDoc = doc(this.fire, `users/${user.uid}`);

    return docData(userDoc).pipe(
      map((data) => (data ?? {})['activities'] || [])
    );
  }
}
