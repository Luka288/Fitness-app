import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable, KeyValueDiffers } from '@angular/core';
import {
  nutrimentData,
  nutrimentsResponse,
} from '../interfaces/food.interface';
import { API_URL } from '../consts/injection.tokens';
import { catchError, from, map, Observable, of, throwError } from 'rxjs';
import { AlertsService } from './alerts.service';
import { Auth } from '@angular/fire/auth';
import { doc, Firestore } from '@angular/fire/firestore';
import { addDoc, getDoc, setDoc } from 'firebase/firestore';
import { object } from '@angular/fire/database';
import { Part } from 'firebase/vertexai';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private readonly http = inject(HttpClient);
  private readonly alertsService = inject(AlertsService);
  private readonly auth = inject(Auth);
  private readonly Fire = inject(Firestore);

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
          const productData = {
            fat: res.product.nutriments.fat,
            salt: res.product.nutriments.salt,
            energyKcal: res.product.nutriments['energy-kcal'],
            proteins: res.product.nutriments.proteins,
            carbohydrates: res.product.nutriments.carbohydrates,
            sugars: res.product.nutriments.sugars,
          };

          return { ...res, productData };
        }),
        catchError((err) => {
          this.alertsService.toast('Cant find barcode', 'error', 'red');
          return throwError(() => err);
        })
      );
  }

  async storeData(data: Partial<nutrimentData>) {
    const user = this.auth.currentUser;
    if (!user) return;

    const date = new Date().toISOString().split('T')[0];

    const nutrimentDoc = doc(this.Fire, `users/${user.uid}/nutrition/${date}`);

    try {
      const docSnap = await getDoc(nutrimentDoc);

      let updatedData: Partial<nutrimentData> = {};

      if (docSnap.exists()) {
        const currData = docSnap.data() as nutrimentData;

        updatedData = { ...currData };

        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const typedKey = key as keyof nutrimentData;

            if (data[typedKey] && typeof data[typedKey] === 'number') {
              updatedData[typedKey] =
                (currData[typedKey] || 0) + data[typedKey];
            } else {
              updatedData[typedKey] = data[typedKey];
            }
          }
        }
      }
      await setDoc(nutrimentDoc, updatedData, { merge: true });

      this.alertsService.toast('Data stored', 'success', 'green');
    } catch (error) {
      this.alertsService.toast('Something went wrong', 'error', 'red');
    }
  }

  getdailyMeals(): Observable<nutrimentData | null> {
    const user = this.auth.currentUser;
    if (!user) return of(null);

    const date = new Date().toISOString().split('T')[0];

    const mealRef = doc(this.Fire, `users/${user.uid}/nutrition/${date}`);

    return from(getDoc(mealRef)).pipe(
      map((docSnap) =>
        docSnap.exists() ? (docSnap.data() as nutrimentData) : null
      ),
      catchError(() => of(null))
    );
  }
}
