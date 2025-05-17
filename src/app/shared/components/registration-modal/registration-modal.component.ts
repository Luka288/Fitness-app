import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmailAuthCredential } from 'firebase/auth';
import { userRegData } from '../../interfaces/user.reg.interface';

@Component({
  selector: 'app-registration-modal',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registration-modal.component.html',
  styleUrl: './registration-modal.component.scss',
})
export class RegistrationModalComponent {
  @Output() emitUserData = new EventEmitter<userRegData>();
  @Output() emitCloseInfo = new EventEmitter<void>();

  registrationForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [
        Validators.minLength(8),
        Validators.maxLength(16),
        Validators.required,
      ],
      nonNullable: true,
    }),

    username: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
      ],
      nonNullable: true,
    }),
  });

  emitData() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.emitUserData.emit({
      email: this.registrationForm.controls.email.value,
      password: this.registrationForm.controls.password.value,
      username: this.registrationForm.controls.username.value,
    });

    this.registrationForm.reset();
  }

  emitClose() {
    this.emitCloseInfo.emit();
  }
}
