import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WorkoutInterface } from '../../shared/interfaces/workout.interface';
import { workoutTypes } from '../../shared/consts/workouts';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CalculateService } from '../../shared/services/calculate.service';
import { userFormData } from '../../shared/interfaces/formData.interface';
import { ActivityInfoComponent } from '../../shared/components/activity-info/activity-info.component';
import { calculatedData } from '../../shared/interfaces/workout.data.interface';

@Component({
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    ActivityInfoComponent,
  ],
  templateUrl: './workout-detail.component.html',
  styleUrl: './workout-detail.component.scss',
})
export class WorkoutDetailComponent {
  private readonly router = inject(ActivatedRoute);
  private readonly calculateService = inject(CalculateService);

  workout: WorkoutInterface | undefined;
  calculatedData = signal<calculatedData[]>([]);

  metricInputControl = new FormGroup({});

  ngOnInit(): void {
    const currWorkout = this.router.snapshot.paramMap.get('id');
    this.workout = workoutTypes.find((workout) => workout.id === currWorkout);

    this.metricInputControl.addControl(
      'activityName',
      new FormControl(currWorkout)
    );

    this.workout?.metrics.forEach((metric) => {
      if (metric === 'effort') {
        this.metricInputControl.addControl(
          'effort',
          new FormControl('LIGHT', Validators.required)
        );
      }

      this.metricInputControl.addControl(
        metric,
        new FormControl('', [Validators.required, Validators.min(1)])
      );

      if (metric === 'distance') {
        this.metricInputControl.addControl('unit', new FormControl('KM'));
      }

      if (metric === 'time') {
        this.metricInputControl.addControl('timeUnit', new FormControl('HOUR'));
      }
    });
  }

  saveWorkout() {
    const currWorkout = this.router.snapshot.paramMap.get('id');

    if (this.metricInputControl.invalid) {
      Object.values(this.metricInputControl.controls).forEach((control) => {
        (control as AbstractControl).markAsTouched();
      });
      return;
    }

    this.getCalculations(currWorkout!, this.metricInputControl.value);

    this.metricInputControl.reset({
      unit: 'KM',
      timeUnit: 'HOUR',
    });
  }

  getCalculations(activityName: string, formData: userFormData) {
    this.calculateService
      .processWorkoutData(activityName, formData)
      ?.subscribe((res: calculatedData[]) => {
        this.calculatedData.set(res);
      });
  }
}
