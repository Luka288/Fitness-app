import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WorkoutInterface } from '../../shared/interfaces/workout.interface';
import { workoutTypes } from '../../shared/consts/workouts';

@Component({
  selector: 'app-workout-detail',
  imports: [RouterModule],
  templateUrl: './workout-detail.component.html',
  styleUrl: './workout-detail.component.scss',
})
export class WorkoutDetailComponent {
  private readonly router = inject(ActivatedRoute);

  workout: WorkoutInterface | undefined;

  constructor() {
    const currWorkout = this.router.snapshot.paramMap.get('id');
    this.workout = workoutTypes.find((workout) => workout.id === currWorkout);
  }
}
