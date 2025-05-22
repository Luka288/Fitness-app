import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import {
  baseNutriments,
  nutrimentsResponse,
} from '../../interfaces/food.interface';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food.service';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  private readonly foodService = inject(FoodService);
  private readonly alertService = inject(AlertsService);

  @Input() productInput: nutrimentsResponse | null = null;
  emptyResponse = signal<boolean>(false);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productInput'] && changes['productInput'].currentValue) {
      this.emptyResponse.set(false);
    }
  }

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

    // ამოწმებს ყველა ფორფერთის არის თუ არა undefined ან null
    // იმ შემთხვევაში თუ არის null ან udnefined არ აგზავნის ჩარტში
    const allEmpty = Object.entries(productData)
      .filter(([key]) => key !== 'date')
      .every(([_, value]) => !value);

    if (allEmpty) {
      this.emptyResponse.set(true);
      return;
    }

    const filteredData = Object.fromEntries(
      Object.entries(productData).filter(
        ([_, value]) => value != null && value !== 0
      )
    );

    this.foodService.storeData(filteredData);
  }
}
