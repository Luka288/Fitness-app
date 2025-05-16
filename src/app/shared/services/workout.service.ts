import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { docData, Firestore } from '@angular/fire/firestore';
import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore';
import { calculatedData, userData } from '../interfaces/workout.data.interface';
import { AlertsService } from './alerts.service';
import { combineLatest, map, Observable, of } from 'rxjs';
import { DailyGoal } from '../interfaces/daily.goal.interface';
import { userInterface } from '../interfaces/user.interface';
import { weeklyChart } from '../interfaces/weekly.interface';

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

  userActivity(): Observable<calculatedData[]> {
    const user = this.auth.currentUser;
    if (!user) return of([]);

    const userDoc = doc(this.fire, `users/${user.uid}`);

    return docData(userDoc).pipe(
      map((data) =>
        ((data ?? {})['activities'] || []).map((activity: calculatedData) => ({
          ...activity,
          burnedCalories: Math.floor(activity.burnedCalories!),
        }))
      )
    );
  }

  addGoal(data: DailyGoal) {
    const user = this.auth.currentUser;
    if (!user) return;

    const date = new Date().toISOString().split('T')[0];
    const goalDoc = doc(this.fire, `users/${user.uid}/dailyGoals/${date}`);

    // date: new Date().toISOString(),

    try {
      setDoc(
        goalDoc,
        {
          goal: data.goal,
          type: data.type,
          addDate: data.addDate,
        },
        { merge: true }
      );
      this.alerts.toast('Goal saved!', 'success', 'green');
    } catch (error) {}
  }

  goalCalculate(): Observable<DailyGoal | null> {
    const user = this.auth.currentUser;
    if (!user) return of(null);

    const date = new Date().toISOString().split('T')[0];
    const goalRef = doc(this.fire, `users/${user.uid}/dailyGoals/${date}`);
    const activityRef = doc(this.fire, `users/${user.uid}`);

    const goal = docData(goalRef).pipe(map((res) => res as DailyGoal));
    const userRef = docData(activityRef).pipe(
      map((res) => res as userInterface)
    );

    return combineLatest([goal, userRef]).pipe(
      map(([goal, userRef]) => {
        if (!goal || !userRef) return null;

        const todaysActivity = userRef.activities.filter(
          (data) => data.date === date
        );

        const progress = todaysActivity.reduce(
          (sum: number, data: userData) => {
            if (goal.type === 'CALORIES') {
              return sum + data.burnedCalories;
            }

            if (goal.type === 'DISTANCE') {
              console.log('test');
              return sum + (data.distance || 0);
            }

            return sum;
          },
          0
        );

        return {
          ...goal,
          progress: Math.round(progress),
        };
      })
    );
  }

  getChartedWorkouts(): Observable<weeklyChart[] | []> {
    const user = this.auth.currentUser;
    if (!user) return of([]);

    const workoutRef = doc(this.fire, `users/${user.uid}`);

    return docData(workoutRef).pipe(
      map((res) => {
        if (!res) return [];
        const activities = (res as userInterface).activities || [];

        return activities.slice(-7).map((res) => ({
          burnedCalories: Math.round(res.burnedCalories),
          activity: res.activityName,
          date: res.date,
        }));
      })
    );
  }

  prWorkout(): Observable<userData | null> {
    const user = this.auth.currentUser;
    if (!user) return of();

    const workoutRef = doc(this.fire, `users/${user.uid}`);

    return docData(workoutRef).pipe(
      map((res) => {
        if (!res) return null;
        const userData = res as userInterface;
        const workouts = userData.activities ? userData.activities : [];

        if (workouts.length === 0) return null;

        return workouts.reduce((max, item) =>
          item.burnedCalories > max.burnedCalories ? item : max
        );
      })
    );
  }
}
