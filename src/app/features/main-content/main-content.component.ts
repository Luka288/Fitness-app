import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FirebaseAuthService } from '../../shared/services/firebase-auth.service';
import { CommonModule } from '@angular/common';
import { DataService } from '../../shared/services/data.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { WorkoutInterface } from '../../shared/interfaces/workout.interface';
import { UserService } from '../../shared/services/user.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, CardComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  private readonly autService = inject(FirebaseAuthService);
  private readonly dataService = inject(DataService);
  private readonly userService = inject(UserService);

  user = toSignal(this.autService.currentUseR(), { initialValue: null });
  userActivities = toSignal(this.userService.getUserActivity(), {
    initialValue: [],
  });
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
