import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() saveGoal = new EventEmitter<number>();

  activityControl = new FormControl('CALORIES');
  goalInputControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(10000),
  ]);

  ngOnInit() {
    this.activityControl.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onSave() {
    if (this.goalInputControl.invalid) {
      this.goalInputControl.markAsTouched();
      return;
    }
    console.log(`${this.goalInputControl.value} ${this.activityControl.value}`);

    this.close.emit();
  }

  onClose() {
    this.close.emit();
    this.goalInputControl.reset();
  }
}
