import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BooleanService } from '../../services/boolean.service';
import { UserService } from '../../services/user.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-password-reset-modal',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './password-reset-modal.component.html',
  styleUrl: './password-reset-modal.component.scss',
})
export class PasswordResetModalComponent {
  private readonly userService = inject(UserService);

  @Output() emitCloseInfo = new EventEmitter<void>();
  @Output() emitPassReset = new EventEmitter<string>();

  ngOnInit(): void {
    this.emailResetForm.controls.emailReset.valueChanges
      .pipe(debounceTime(300))
      .subscribe((res) => {
        if (res === '') return;

        this.checkEmail(res);
      });
  }

  isEmailUnique = signal<boolean>(true);
  errMsg: string = '';

  emailResetForm = new FormGroup({
    emailReset: new FormControl('', {
      validators: [Validators.email, Validators.required],
      nonNullable: true,
    }),
  });

  // მხოლოდ პაროლის რესეტის დროს
  // ამოწმებს არსებობს თუ არა იმეილი ბაზაში
  checkEmail(email: string) {
    this.userService.checkEmail(email).subscribe({
      next: (res) => {
        if (res === true) {
          this.errMsg = '';
          this.isEmailUnique.set(true);
        }

        if (res === false) {
          this.errMsg = 'Cant find email address';
          this.isEmailUnique.set(false);
        }
      },
    });
  }

  sendReset() {
    if (this.emailResetForm.invalid || !this.isEmailUnique()) {
      this.emailResetForm.markAllAsTouched();
      return;
    }

    const email = this.emailResetForm.controls.emailReset.value;

    this.emitPassReset.emit(email);
    this.emailResetForm.reset();
    this.isEmailUnique.set(true);
  }

  emitClose() {
    this.emitCloseInfo.emit();
  }
}
