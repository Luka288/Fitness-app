import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FirebaseAuthService } from '../../shared/services/firebase-auth.service';
import { CommonModule } from '@angular/common';
import { DataService } from '../../shared/services/data.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { WorkoutInterface } from '../../shared/interfaces/workout.interface';
import { WorkoutService } from '../../shared/services/workout.service';
import { WorkoutData } from '../../shared/interfaces/workout.data.interface';
import { TransformStrPipe } from '../../shared/pipes/transform-str.pipe';
import { DashboardCardComponent } from '../../shared/components/dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, CardComponent, DashboardCardComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  private readonly autService = inject(FirebaseAuthService);
  private readonly dataService = inject(DataService);
  readonly workoutService = inject(WorkoutService);

  user = toSignal(this.autService.currentUseR(), { initialValue: null });
  userActivities = signal<WorkoutData[]>([]);

  // userActivities = toSignal(this.workoutService.getUserActivity());

  workoutTypes = toSignal(this.dataService.workoutTypes(), {
    initialValue: [],
  });

  ngOnInit(): void {
    this.workoutService.getUserActivity().subscribe((res) => {
      this.userActivities.set(res as WorkoutData[]);
    });
  }

  userWorkouts(w: WorkoutInterface) {
    console.log(w);
  }
}
