import { Component, inject, Input } from '@angular/core';
import {
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

  ngOnInit(): void {}

  sendData(data: nutrimentData) {
    const productData = {
      energyKcal: data['energy-kcal'],
      proteins: data.proteins,
      carbohydrates: data.carbohydrates,
      sugars: data.sugars,
      fat: data.fat,
      salt: data.salt,
      novaGroup: data['nova-group'],
      novaGroup100g: data['nova-group_100g'],
      novaGroupServing: data['nova-group_serving'],
      nutritionScoreFr: data['nutrition-score-fr'],
      nutritionScoreFr100g: data['nutrition-score-fr_100g'],
    };

    const filteredData = Object.fromEntries(
      Object.entries(productData).filter(([key, value]) => value !== undefined)
    );

    this.foodService.storeData(filteredData);
  }
}
