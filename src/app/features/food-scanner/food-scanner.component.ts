import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FoodService } from '../../shared/services/food.service';
import { nutrimentsResponse } from '../../shared/interfaces/food.interface';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-food-scanner',
  imports: [CommonModule, ReactiveFormsModule, ProductCardComponent],
  templateUrl: './food-scanner.component.html',
  styleUrl: './food-scanner.component.scss',
})
export class FoodScannerComponent {
  private readonly foodService = inject(FoodService);

  barcodeGroup = new FormGroup({
    barcodeInput: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  product = signal<nutrimentsResponse | null>(null);

  ngOnInit(): void {}

  searchProduct(product: string) {
    this.foodService.getFood(product).subscribe((res) => {
      this.product.set(res);
    });
  }

  submit(): void {
    if (this.barcodeGroup.invalid) {
      this.barcodeGroup.markAllAsTouched();
      return;
    }
    this.searchProduct(this.barcodeGroup.controls.barcodeInput.value);
    this.barcodeGroup.reset();
  }
}
