import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { docData, Firestore } from '@angular/fire/firestore';
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { calculatedData, userData } from '../interfaces/workout.data.interface';
import { AlertsService } from './alerts.service';
import { combineLatest, map, Observable, of } from 'rxjs';
import { DailyGoal } from '../interfaces/daily.goal.interface';
import { userPrivateData } from '../interfaces/user.interface';
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

      // const publicData = doc(this.fire, `publicData/${user.uid}`);

      await updateDoc(workoutRef, {
        activities: arrayUnion({
          ...workoutData,
          date: date,
          savedAt: new Date().toISOString(),
        }),
      });

      // const data = await getDoc(workoutRef);
      // let activitiesLen = 0;
      // let totalCalories = 0;

      // if (data.exists()) {
      //   const userData = data.data() as userPrivateData;

      //   activitiesLen = userData?.activities.length || 0;

      //   totalCalories = userData?.activities.reduce(
      //     (sum, activity) => sum + (activity.burnedCalories || 0),
      //     0
      //   );
      // }

      // await updateDoc(publicData, {
      //   activities: activitiesLen,
      //   burnedCalories: totalCalories,
      // });
      this.updatePublicData();

      this.alerts.toast('Data saved!', 'success', '');
    } catch (error) {
      this.alerts.toast('Something went wrong try again', 'error', 'red');
    }
  }

  async updatePublicData() {
    const user = this.auth.currentUser;
    if (!user) return;

    try {
      const userDocRef = doc(this.fire, `users/${user.uid}`);
      const publicDataRef = doc(this.fire, `publicData/${user.uid}`);

      const userSnapshot = await getDoc(userDocRef);

      if (!userSnapshot.exists()) return;

      const userData = userSnapshot.data() as userPrivateData;
      const activities = userData.activities || [];

      const activitiesLen = activities.length;
      const totalCalories = activities.reduce(
        (sum, activity) => sum + (activity.burnedCalories || 0),
        0
      );

      await updateDoc(publicDataRef, {
        activities: activitiesLen,
        burnedCalories: totalCalories,
      });
    } catch (error) {
      console.error('Error syncing public data:', error);
    }
  }

  userActivity(): Observable<calculatedData[]> {
    const user = this.auth.currentUser;
    if (!user) return of([]);

    const userDoc = doc(this.fire, `users/${user.uid}`);
    this.updatePublicData();

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
      map((res) => res as userPrivateData)
    );

    return combineLatest([goal, userRef]).pipe(
      map(([goal, userRef]) => {
        if (!goal || !userRef) return null;

        const todaysActivity = (userRef.activities || []).filter(
          (data) => data.date === date
        );

        const progress = todaysActivity.reduce(
          (sum: number, data: userData) => {
            if (goal.type === 'CALORIES') {
              return sum + (data.burnedCalories || 0);
            }

            if (goal.type === 'DISTANCE') {
              return sum + (data.distance || 0);
            }

            return sum;
          },
          0
        );

        return {
          ...goal,
          progress: Math.round(progress) || 0,
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
        const activities = (res as userPrivateData).activities || [];

        return activities.slice(-7).map((res) => ({
          burnedCalories: Math.round(res.burnedCalories),
          activity: res.activityName,
          date: res.date,
        }));
      })
    );
  }

  prWorkout(): Observable<calculatedData | null> {
    const user = this.auth.currentUser;
    if (!user) return of();

    const workoutRef = doc(this.fire, `users/${user.uid}`);

    return docData(workoutRef).pipe(
      map((res) => {
        if (!res) return null;
        const userData = res as userPrivateData;
        const workouts = userData.activities ? userData.activities : [];

        if (workouts.length === 0) return null;

        return workouts.reduce((max, item) =>
          item.burnedCalories > max.burnedCalories ? item : max
        );
      })
    );
  }
}
