import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-panel',
  imports: [RouterModule, CommonModule],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
})
export class SidePanelComponent {
  private readonly authservice = inject(FirebaseAuthService);
  private readonly dataService = inject(DataService);

  sidePanelItems = toSignal(this.dataService.getSideNavItems(), {
    initialValue: [],
  });

  constructor() {}

  logOut() {
    this.authservice.logOut();
  }
}
