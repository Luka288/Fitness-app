import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { WorkoutData } from '../interfaces/workout.data.interface';
import { AlertsService } from './alerts.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private readonly auth = inject(Auth);
  private readonly fire = inject(Firestore);
  private readonly alerts = inject(AlertsService);

  async sendData(workoutData: WorkoutData) {
    try {
      const user = this.auth.currentUser;
      if (!user) return;

      const date = new Date().toISOString().split('T')[0];

      const workoutRef = collection(this.fire, `users/${user.uid}/workouts`);

      await addDoc(workoutRef, { ...workoutData, date: date });
      this.alerts.toast('Data saved!', 'success', '');
    } catch (error) {
      this.alerts.toast('Something went wrong try again', 'error', 'red');
    }
  }

  getUserActivity() {
    const user = this.auth.currentUser;
    if (!user) return of([]);

    const workouts = collection(this.fire, `users/${user.uid}/workouts`);

    return collectionData(workouts, { idField: 'id' });
  }
}
