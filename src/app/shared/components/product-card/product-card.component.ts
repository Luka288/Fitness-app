import { Component, Input } from '@angular/core';
import { nutrimentsResponse } from '../../interfaces/food.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() productInput: nutrimentsResponse | null = null;

  ngOnInit(): void {}
}

// <h1>Product: {{ productInput?.product?.brands }}</h1>
// <h3>Fat: {{ productInput?.product?.nutriments?.fat }}g</h3>
// <h3>
//   Enetgy KCAL: {{productInput?.product?.nutriments?.['energy-kcal']}} KCAL
// </h3>
// <h3>Proteins: {{ productInput?.product?.nutriments?.proteins }}g</h3>
// <h3>Carbohydrates: {{ productInput?.product?.nutriments?.carbohydrates }}g</h3>
// <h3>Sugars: {{ productInput?.product?.nutriments?.sugars }}g</h3>
// <h3>Salt: {{ productInput?.product?.nutriments?.salt }}g</h3>
