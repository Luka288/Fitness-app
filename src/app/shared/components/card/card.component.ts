import { Component, Input } from '@angular/core';
import { WorkoutInterface } from '../../interfaces/workout.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ alias: 'workout' }) workoutInput!: WorkoutInterface;
}
