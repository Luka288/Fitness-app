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
import { PrCardComponent } from '../../shared/components/pr-card/pr-card.component';
import { calculatedData } from '../../shared/interfaces/workout.data.interface';
import { nutrimentData } from '../../shared/interfaces/food.interface';
import { UserService } from '../../shared/services/user.service';

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
    PrCardComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  private readonly autService = inject(FirebaseAuthService);
  private readonly dataService = inject(DataService);
  private readonly foodService = inject(FoodService);
  private readonly userService = inject(UserService);
  readonly workoutService = inject(WorkoutService);

  isOpen = signal(false);
  prLoading = signal<boolean>(true);
  mealLoading = signal<boolean>(true);
  goalLoading = signal<boolean>(true);

  prData = signal<calculatedData | null>(null);
  dailyMeals = signal<nutrimentData | null>(null);
  dailyGoal = signal<DailyGoal | null>(null);

  user = toSignal(this.autService.currentUseR(), { initialValue: null });

  activities = toSignal(this.workoutService.userActivity(), {
    initialValue: [],
  });

  workoutTypes = toSignal(this.dataService.workoutTypes(), {
    initialValue: [],
  });

  weeklyActivity = toSignal(this.workoutService.getChartedWorkouts(), {
    initialValue: [],
  });

  totalKm = computed(() =>
    this.activities().reduce((sum, item) => {
      const distance = Number(item.distance);
      return sum + (isNaN(distance) ? 0 : distance);
    }, 0)
  );

  ngOnInit(): void {
    this.loadDailyMeals();
    this.dailyGoalProgress();
    this.loadPersonalBest();
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

  loadPersonalBest() {
    this.workoutService.prWorkout().subscribe({
      next: (res) => {
        this.prData.set(res);
        this.prLoading.set(false);
      },
      error: (err) => {
        this.prLoading.set(false);
      },
    });
  }

  loadDailyMeals() {
    this.foodService.getdailyMeals().subscribe({
      next: (res) => {
        this.dailyMeals.set(res);
        this.mealLoading.set(false);
      },
      error: (err) => {
        this.mealLoading.set(false);
      },
    });
  }

  dailyGoalProgress() {
    this.workoutService.goalCalculate().subscribe({
      next: (res) => {
        this.dailyGoal.set(res);
        this.goalLoading.set(false);
      },

      error: (e) => {
        this.goalLoading.set(false);
      },
    });
  }
}
