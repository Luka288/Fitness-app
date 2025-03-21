import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WorkoutInterface } from '../../shared/interfaces/workout.interface';
import { workoutTypes } from '../../shared/consts/workouts';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './workout-detail.component.html',
  styleUrl: './workout-detail.component.scss',
})
export class WorkoutDetailComponent {
  private readonly router = inject(ActivatedRoute);

  workout: WorkoutInterface | undefined;

  metricInputControl = new FormGroup({
    distance: new FormControl('', [Validators.required, Validators.min(1)]),
    time: new FormControl('', [Validators.required, Validators.min(1)]),
    calories: new FormControl('', [Validators.required, Validators.min(1)]),
    reps: new FormControl('', [Validators.required, Validators.min(1)]),
    sets: new FormControl('', [Validators.required, Validators.min(1)]),
    weight: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  constructor() {
    const currWorkout = this.router.snapshot.paramMap.get('id');
    this.workout = workoutTypes.find((workout) => workout.id === currWorkout);
  }

  saveWorkout() {
    if (this.metricInputControl.valid) {
      const filteredValues: Record<string, string> = {};
      for (const key in this.metricInputControl.controls) {
        const val = this.metricInputControl.get(key)?.value;

        if (val !== '' && val !== null) {
          filteredValues[key] = val;
        }
      }
      console.log(filteredValues);

      this.metricInputControl.reset();
    }
  }
}
