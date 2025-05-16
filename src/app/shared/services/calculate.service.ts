import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { activityConfig, ActivityType } from '../consts/activity.config';
import { userFormData } from '../interfaces/formData.interface';
import { WorkoutService } from './workout.service';
import { AlertsService } from './alerts.service';
import { calculatedData } from '../interfaces/workout.data.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  private readonly workoutService = inject(WorkoutService);
  private readonly alertService = inject(AlertsService);

  processWorkoutData(
    activityName: string,
    formData: userFormData
  ): Observable<calculatedData[]> {
    const currActivity = activityName as ActivityType;
    const activity =
      activityConfig[currActivity as keyof typeof activityConfig];

    if (!activity) {
      this.alertService.toast('Something went wrong', 'error', 'red');
      return of([]);
    }

    if (activity.calculate) {
      const result = activity.calculate(formData);
      this.workoutService.saveData(result as calculatedData);
      return of([result as calculatedData]);
    }

    return of([]);
  }
}
