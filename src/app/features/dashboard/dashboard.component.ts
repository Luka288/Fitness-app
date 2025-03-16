import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseAuthService } from '../../shared/services/firebase-auth.service';
import { SidePanelComponent } from '../../shared/components/side-panel/side-panel.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, SidePanelComponent],
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
