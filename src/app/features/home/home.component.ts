import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseAuthService } from '../../shared/services/firebase-auth.service';
import { CommonModule } from '@angular/common';
import { WorkoutInterface } from '../../shared/interfaces/workout.interface';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly AuthService = inject(FirebaseAuthService);
  private readonly dataService = inject(DataService);

  BTNS = this.dataService.getHeaderButtons();

  constructor() {}

  googleAuth() {
    this.AuthService.googleAuth();
  }

  testLogout() {
    this.AuthService.logOut();
  }
}
