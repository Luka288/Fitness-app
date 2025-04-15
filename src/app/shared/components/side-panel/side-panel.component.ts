import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { ResizeTrackDirective } from '../../directives/resize-track.directive';
import { BooleanService } from '../../services/boolean.service';

@Component({
  selector: 'app-side-panel',
  imports: [RouterModule, CommonModule, ResizeTrackDirective],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
})
export class SidePanelComponent {
  private readonly authservice = inject(FirebaseAuthService);
  private readonly dataService = inject(DataService);
  private readonly booleanService = inject(BooleanService);

  sidePanelItems = toSignal(this.dataService.getSideNavItems(), {
    initialValue: [],
  });

  enablePanel = toSignal(this.booleanService.enablePanel.asObservable(), {
    initialValue: true,
  });

  logOut() {
    this.authservice.logOut();
  }

  toggle() {
    const currentValue = this.enablePanel();
    this.booleanService.enablePanel.next(!currentValue);
  }
}
