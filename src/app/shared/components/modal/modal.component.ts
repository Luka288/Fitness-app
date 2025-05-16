import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DailyGoal } from '../../interfaces/daily.goal.interface';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() saveGoal = new EventEmitter<DailyGoal>();

  activityControl = new FormControl('CALORIES', { nonNullable: true });
  goalInputControl = new FormControl('', {
    validators: [Validators.required, Validators.min(1), Validators.max(10000)],
    nonNullable: true,
  });

  onSave() {
    if (this.goalInputControl.invalid) {
      this.goalInputControl.markAsTouched();
      return;
    }

    this.saveGoal.emit({
      type: this.activityControl.value,
      goal: Number(this.goalInputControl.value),
      progress: 0,
      addDate: new Date().toISOString(),
    });

    this.goalInputControl.reset();
  }

  onClose() {
    this.close.emit();
    this.goalInputControl.reset();
  }
}
