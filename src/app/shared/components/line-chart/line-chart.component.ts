import { Component, Input } from '@angular/core';
import { LineChartDirective } from '../../directives/line-chart.directive';
import { weeklyChart } from '../../interfaces/weekly.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-line-chart',
  imports: [LineChartDirective, CommonModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent {
  @Input() userWorkoutData: weeklyChart[] | null = null;

  get labels(): string[] {
    if (!this.userWorkoutData) return [];

    return this.userWorkoutData.map((dates) => dates.activity);
  }

  get caloriesData(): number[] {
    if (!this.userWorkoutData) return [];
    return this.userWorkoutData.map((calor) => calor.burnedCalories);
  }
}
