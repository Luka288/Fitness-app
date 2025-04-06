import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { activityConfig, ActivityType } from '../consts/activity.config';
import { userFormData } from '../interfaces/formData.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  processWorkoutData(activityName: string, formData: userFormData) {
    const currActivity = activityName as ActivityType;
    const activity =
      activityConfig[currActivity as keyof typeof activityConfig];

    if (!activity) {
      // ალერტი აქ
      return;
    }

    if (activity.calculate) {
      const result = activity.calculate(formData);
      console.log(result);
      return of(result);
    }

    return of({});
  }
}
