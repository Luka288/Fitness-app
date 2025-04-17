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
      energyKcal: data.energyKcal,
      proteins: data.proteins,
      carbohydrates: data.carbohydrates,
      sugars: data.sugars,
      fat: data.fat,
      salt: data.salt,
      novaGroup: data.novaGroup,
      novaGroup100g: data.novaGroup100g,
      novaGroupServing: data.novaGroup100g,
      nutritionScoreFr: data.nutritionScoreFr,
      nutritionScoreFr100g: data.nutritionScoreFr100g,
    };

    const filteredData = Object.fromEntries(
      Object.entries(productData).filter(([key, value]) => value !== undefined)
    );

    this.foodService.storeData(filteredData);
  }
}
