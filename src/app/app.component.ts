import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidePanelComponent } from './shared/components/side-panel/side-panel.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
