import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { nutrimentData } from '../../interfaces/food.interface';

@Component({
  selector: 'app-nutrition-card',
  imports: [CommonModule],
  templateUrl: './nutrition-card.component.html',
  styleUrl: './nutrition-card.component.scss',
})
export class NutritionCardComponent {
  @Input() nutritionInput: nutrimentData | null = null;
}
