import { Component, computed, inject, signal } from '@angular/core';
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
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { DailyGoalComponent } from '../../shared/components/daily-goal/daily-goal.component';
import { DailyGoal } from '../../shared/interfaces/daily.goal.interface';
import { LineChartComponent } from '../../shared/components/line-chart/line-chart.component';
import { RouterLink } from '@angular/router';
import { LastSeenPipe } from '../../shared/pipes/last-seen.pipe';

@Component({
  selector: 'app-main-content',
  imports: [
    CommonModule,
    CardComponent,
    NutritionCardComponent,
    MatProgressSpinnerModule,
    ModalComponent,
    DailyGoalComponent,
    LineChartComponent,
    RouterLink,
    LastSeenPipe,
    DashboardCardComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  private readonly autService = inject(FirebaseAuthService);
  private readonly dataService = inject(DataService);
  private readonly foodService = inject(FoodService);
  readonly workoutService = inject(WorkoutService);

  isOpen = signal(false);
  isLoading = signal<boolean>(true);
  totalKm = computed(() =>
    this.activities().reduce((sum, item) => {
      const distance = Number(item.distance);

      setTimeout(() => {
        console.log('test');
      }, 500);

      return sum + (isNaN(distance) ? 0 : distance);
    }, 0)
  );

  user = toSignal(this.autService.currentUseR(), { initialValue: null });

  activities = toSignal(this.workoutService.userActivity(), {
    initialValue: [],
  });

  workoutTypes = toSignal(this.dataService.workoutTypes(), {
    initialValue: [],
  });

  dailyMeals = toSignal(this.foodService.getdailyMeals(), {
    initialValue: null,
  });

  dailyGoal = toSignal(this.workoutService.goalCalculate(), {
    initialValue: null,
  });

  weeklyActivity = toSignal(this.workoutService.getChartedWorkouts(), {
    initialValue: [],
  });

  ngOnInit(): void {
    // ხელოვნური ლოადინგ სქრინი
    setTimeout(() => {
      this.isLoading.set(false);
      console.log(this.activities());
    }, 500);

    this.workoutService.getChartedWorkouts().subscribe((res) => {
      console.log(res);
    });
  }

  openModal() {
    this.isOpen.set(true);
  }

  saveDailyGoal(data: DailyGoal) {
    this.isOpen.set(false);
    this.workoutService.addGoal(data);
  }

  closeModal() {
    this.isOpen.set(false);
  }
}
