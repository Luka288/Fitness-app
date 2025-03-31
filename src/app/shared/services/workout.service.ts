import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { WorkoutData } from '../interfaces/workout.data.interface';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private readonly auth = inject(Auth);
  private readonly fire = inject(Firestore);

  async sendData(workoutData: WorkoutData, activityName: string) {
    try {
      const user = this.auth.currentUser;
      if (!user) return;

      const date = new Date().toISOString().split('T')[0];

      const workoutRef = doc(
        this.fire,
        `users/${user.uid}/workouts/${date}/activities/${activityName}`
      );

      await setDoc(workoutRef, workoutData);
      console.log('data saved to firebase');
    } catch (error) {
      console.log(error);
    }
  }
}
