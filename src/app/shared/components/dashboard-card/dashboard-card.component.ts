import { Component, Input } from '@angular/core';
import {
  calculatedData,
  WorkoutData,
} from '../../interfaces/workout.data.interface';
import { TransformStrPipe } from '../../pipes/transform-str.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-card',
  imports: [TransformStrPipe, CommonModule],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss',
})
export class DashboardCardComponent {
  @Input({ alias: 'cardInfo' }) activity!: calculatedData;
}
