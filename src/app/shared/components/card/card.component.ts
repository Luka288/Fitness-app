import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkoutInterface } from '../../interfaces/workout.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ alias: 'workout' }) workoutInput!: WorkoutInterface;
  @Output() emitWorkout = new EventEmitter<WorkoutInterface>();

  sendWorkout() {
    this.emitWorkout.emit(this.workoutInput);
  }
}
