import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FirebaseAuthService } from '../../shared/services/firebase-auth.service';
import { CommonModule } from '@angular/common';
import { DataService } from '../../shared/services/data.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { WorkoutService } from '../../shared/services/workout.service';
import { DashboardCardComponent } from '../../shared/components/dashboard-card/dashboard-card.component';
import { FoodService } from '../../shared/services/food.service';
import { NutritionCardComponent } from '../../shared/components/nutrition-card/nutrition-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-main-content',
  imports: [
    CommonModule,
    CardComponent,
    DashboardCardComponent,
    NutritionCardComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  private readonly autService = inject(FirebaseAuthService);
  private readonly dataService = inject(DataService);
  private readonly foodService = inject(FoodService);
  readonly workoutService = inject(WorkoutService);

  user = toSignal(this.autService.currentUseR(), { initialValue: null });
  activities = toSignal(this.workoutService.userActivity(), {
    initialValue: [],
  });

  isLoading = signal<boolean>(true);

  dailyMeals = toSignal(this.foodService.getdailyMeals(), {
    initialValue: null,
  });

  workoutTypes = toSignal(this.dataService.workoutTypes(), {
    initialValue: [],
  });

  ngOnInit(): void {
    this.foodService.getdailyMeals().subscribe(console.log);

    // this.foodService.getAllMeals().subscribe(console.log);

    // ხელოვნური ლოადინგ სქრინი
    setTimeout(() => {
      this.isLoading.set(false);
    }, 500);
  }
}
