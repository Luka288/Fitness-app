import { Component, inject } from '@angular/core';
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
import { WorkoutService } from '../../shared/services/workout.service';

@Component({
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './workout-detail.component.html',
  styleUrl: './workout-detail.component.scss',
})
export class WorkoutDetailComponent {
  private readonly router = inject(ActivatedRoute);
  private readonly workoutService = inject(WorkoutService);

  workout: WorkoutInterface | undefined;

  metricInputControl = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    const currWorkout = this.router.snapshot.paramMap.get('id');
    this.workout = workoutTypes.find((workout) => workout.id === currWorkout);

    // ჭირდება რეფაქტორი უნდა გადასცეს workoutService ახლანდელი
    // აქტივობის სახელი
    this.metricInputControl.addControl(
      'activityName',
      new FormControl(currWorkout)
    );

    this.workout?.metrics.forEach((metric) => {
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
    if (this.metricInputControl.invalid) {
      Object.values(this.metricInputControl.controls).forEach((control) => {
        (control as AbstractControl).markAsTouched();
      });
      return;
    }
    console.log(this.metricInputControl.value);
    this.workoutService.saveData(this.metricInputControl.value);
    this.metricInputControl.reset({
      unit: 'KM',
      timeUnit: 'HOUR',
    });
  }
}
