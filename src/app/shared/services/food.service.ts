import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { nutrimentsResponse } from '../interfaces/food.interface';
import { API_URL } from '../consts/injection.tokens';
import { catchError, EMPTY, map, throwError } from 'rxjs';
import { AlertsService } from './alerts.service';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private readonly http = inject(HttpClient);
  private readonly alertsService = inject(AlertsService);

  constructor(@Inject(API_URL) private API: string) {}

  //სნიკერსი: 5000159461122
  productStaticCode: string = '5000159461122';

  //4860103230423
  //4865602000027

  getFood(barCode: string) {
    return this.http
      .get<nutrimentsResponse>(`${this.API}/${barCode}.json`)
      .pipe(
        map((res) => {
          const nutriments = {
            fat: res.product.nutriments.fat,
            salt: res.product.nutriments.salt,
            energyKcal: res.product.nutriments['energy-kcal'],
            proteins: res.product.nutriments.proteins,
            carbohydrates: res.product.nutriments.carbohydrates,
            sugars: res.product.nutriments.sugars,
          };

          return { ...res, nutriments };
        }),
        catchError((err) => {
          this.alertsService.toast('Cant find barcode', 'error', 'red');
          return throwError(() => err);
        })
      );
  }
}
