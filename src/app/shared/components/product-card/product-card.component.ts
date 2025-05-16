import { Component, inject, Input } from '@angular/core';
import {
  baseNutriments,
  nutrimentData,
  nutrimentsResponse,
} from '../../interfaces/food.interface';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  private readonly foodService = inject(FoodService);

  @Input() productInput: nutrimentsResponse | null = null;

  sendData(data: baseNutriments) {
    const productData = {
      energyKcal: data['energy-kcal'],
      proteins: data.proteins,
      carbohydrates: data.carbohydrates,
      sugars: data.sugars,
      fat: data.fat,
      salt: data.salt,
      novaGroup: data['nova-group'],
      novaGroup100g: data['nova-group_100g'],
      novaGroupServing: data['nova-group_100g'],
      nutritionScoreFr: data['nutrition-score-fr'],
      nutritionScoreFr100g: data['nutrition-score-fr_100g'],
      date: new Date().toISOString().split('T')[0],
    };

    const filteredData = Object.fromEntries(
      Object.entries(productData).filter(([key, value]) => value != null)
    );

    this.foodService.storeData(filteredData);
  }
}
