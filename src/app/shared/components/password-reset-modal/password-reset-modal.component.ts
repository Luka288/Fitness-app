import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-password-reset-modal',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './password-reset-modal.component.html',
  styleUrl: './password-reset-modal.component.scss',
})
export class PasswordResetModalComponent {
  @Output() emitCloseInfo = new EventEmitter<void>();
  @Output() emitPassReset = new EventEmitter<string>();

  emailSended = signal<boolean>(false);
  isEmailUnique = signal<boolean>(true);

  ngOnInit(): void {}

  emailResetForm = new FormGroup({
    emailReset: new FormControl('', {
      validators: [Validators.email, Validators.required],
      nonNullable: true,
    }),
  });

  sendReset() {
    if (this.emailResetForm.invalid || !this.isEmailUnique()) {
      this.emailResetForm.markAllAsTouched();
      return;
    }

    const email = this.emailResetForm.controls.emailReset.value;

    this.emitPassReset.emit(email);
    this.emailResetForm.reset();
    this.isEmailUnique.set(true);
    this.emailSended.set(true);
  }

  emitClose() {
    this.emitCloseInfo.emit();
  }
}
