import { Component, Input } from '@angular/core';
import { calculatedData } from '../../interfaces/calculate.interface';

@Component({
  selector: 'app-multi-card',
  imports: [],
  templateUrl: './multi-card.component.html',
  styleUrl: './multi-card.component.scss',
})
export class MultiCardComponent {
  @Input() workoutData: calculatedData[] | null = null;

  calculateProgress() {}
}
