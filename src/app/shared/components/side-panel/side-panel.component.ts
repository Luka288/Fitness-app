import { Component, inject, signal } from '@angular/core';
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

  enablePanel = signal<boolean>(true);

  logOut() {
    this.authservice.logOut();
  }

  toggle() {
    this.enablePanel.set(!this.enablePanel());
  }
}
