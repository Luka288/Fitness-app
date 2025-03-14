import { Component } from '@angular/core';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from "./features/header/header.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
