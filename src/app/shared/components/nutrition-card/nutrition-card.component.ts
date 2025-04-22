import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { nutrimentData } from '../../interfaces/food.interface';
import { ChartDirective } from '../../directives/chart.directive';

@Component({
  selector: 'app-nutrition-card',
  standalone: true,
  imports: [CommonModule, ChartDirective],
  templateUrl: './nutrition-card.component.html',
  styleUrl: './nutrition-card.component.scss',
})
export class NutritionCardComponent {
  @Input() nutritionInput: nutrimentData | null = null;
}
