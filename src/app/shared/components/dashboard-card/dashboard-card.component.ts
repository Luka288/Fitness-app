import { Component, Input } from '@angular/core';
import { WorkoutData } from '../../interfaces/workout.data.interface';
import { TransformStrPipe } from '../../pipes/transform-str.pipe';
import { CommonModule } from '@angular/common';
import { calculatedData } from '../../interfaces/calculate.interface';

@Component({
  selector: 'app-dashboard-card',
  imports: [TransformStrPipe, CommonModule],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss',
})
export class DashboardCardComponent {
  @Input({ alias: 'cardInfo' }) activity!: calculatedData;
}
