import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { activityConfig, ActivityType } from '../consts/activity.config';
import { userFormData } from '../interfaces/formData.interface';
import {
  calculatedData,
  calculatedData2,
} from '../interfaces/calculate.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
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
      return of([result as calculatedData]);
    }

    return of([]);
  }
}
