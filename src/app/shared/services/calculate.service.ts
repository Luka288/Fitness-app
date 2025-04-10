import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { activityConfig, ActivityType } from '../consts/activity.config';
import { userFormData } from '../interfaces/formData.interface';
import {
  calculatedData,
  calculatedData2,
} from '../interfaces/calculate.interface';
import { WorkoutService } from './workout.service';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  private readonly workoutService = inject(WorkoutService);

  processWorkoutData(
    activityName: string,
    formData: userFormData
  ): Observable<calculatedData[]> {
    const currActivity = activityName as ActivityType;
    const activity =
      activityConfig[currActivity as keyof typeof activityConfig];

    if (!activity) {
      // ალერტი აქ
      return of([]);
    }

    if (activity.calculate) {
      const result = activity.calculate(formData);
      console.log(result);
      this.workoutService.saveData(result as calculatedData);
      return of([result as calculatedData]);
    }

    return of([]);
  }
}
