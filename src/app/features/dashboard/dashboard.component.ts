import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseAuthService } from '../../shared/services/firebase-auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private readonly autService = inject(FirebaseAuthService);

  constructor() {
    console.log('init');
  }

  logOut() {
    this.autService.logOut();
  }
}
