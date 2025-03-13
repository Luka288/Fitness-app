import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseAuthService } from '../../shared/services/firebase-auth.service';
import { workoutTypes } from '../../shared/consts/workouts';
import { CardComponent } from '../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly AuthService = inject(FirebaseAuthService);

  workoutTypes = workoutTypes;

  signIn() {
    this.AuthService.googleSing();
  }
}
