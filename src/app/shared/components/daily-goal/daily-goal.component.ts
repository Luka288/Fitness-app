import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DailyGoal } from '../../interfaces/daily.goal.interface';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daily-goal',
  imports: [CommonModule, RoundProgressComponent],
  templateUrl: './daily-goal.component.html',
  styleUrl: './daily-goal.component.scss',
})
export class DailyGoalComponent {
  @Input() goalData: DailyGoal | null = null;
  @Output() newGoal = new EventEmitter<void>();

  onNewGoal() {
    this.newGoal.emit();
  }
}
