import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseAuthService } from '../../shared/services/firebase-auth.service';
import { workoutTypes } from '../../shared/consts/workouts';
import { CardComponent } from '../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { WorkoutInterface } from '../../shared/interfaces/workout.interface';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly AuthService = inject(FirebaseAuthService);

  workoutTypes = workoutTypes;

  constructor() {}

  signIn() {
    this.AuthService.googleSing();
  }

  getFromChild(workout: WorkoutInterface) {
    console.log(workout);
  }
}

// <div class="cards">
// <app-card
//   *ngFor="let item of workoutTypes"
//   [workout]="item"
//   (emitWorkout)="getFromChild($event)"
// />
// </div>
// <div class="buttons">
// <button (click)="signIn()">sign in</button>
// </div>
