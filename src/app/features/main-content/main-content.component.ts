import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FirebaseAuthService } from '../../shared/services/firebase-auth.service';
import { CommonModule } from '@angular/common';
import { DataService } from '../../shared/services/data.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { WorkoutInterface } from '../../shared/interfaces/workout.interface';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, CardComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  private readonly autService = inject(FirebaseAuthService);
  private readonly dataService = inject(DataService);

  user = toSignal(this.autService.currentUseR(), { initialValue: null });
  workoutTypes = toSignal(this.dataService.workoutTypes(), {
    initialValue: [],
  });

  constructor() {
    console.log(this.user());
  }

  userWorkouts(w: WorkoutInterface) {
    console.log(w);
  }
}
