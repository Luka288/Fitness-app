import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { userRegData } from '../../interfaces/user.reg.interface';
import { UserService } from '../../services/user.service';
import { debounceTime } from 'rxjs';
import { BooleanService } from '../../services/boolean.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-registration-modal',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './registration-modal.component.html',
  styleUrl: './registration-modal.component.scss',
})
export class RegistrationModalComponent {
  private readonly userService = inject(UserService);
  readonly booleanService = inject(BooleanService);

  @Output() emitUserData = new EventEmitter<userRegData>();
  @Output() emitCloseInfo = new EventEmitter<void>();
  @Output() emitPassReset = new EventEmitter<string>();

  passReset = this.booleanService.forgotPasswordToggle.value;

  emailResetForm = new FormGroup({
    emailReset: new FormControl('', {
      validators: [Validators.email, Validators.required],
      nonNullable: true,
    }),
  });

  errMessage: string = '';
  emailError: string = '';
  usernameError: string = '';

  isFormReady = signal<boolean>(true);
  isEmailUnique = signal<boolean>(true);

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

  ngOnInit() {
    this.registrationForm.controls.username.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => this.validateUser());

    this.registrationForm.controls.email.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => this.validateUser());
  }

  validateUser() {
    let username = this.registrationForm.controls.username.value;

    this.userService.checkUsername(username).subscribe({
      next: (res) => {
        if (res === true) {
          this.registrationForm.controls.username.setErrors({
            usernameTaken: true,
          });
        }
      },
      error: (err) => {
        console.error('Error checking user properties:', err);
      },
    });
  }

  emitData() {
    if (
      this.registrationForm.invalid ||
      !this.isFormReady() ||
      !this.isEmailUnique()
    ) {
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

  sendReset() {
    if (this.emailResetForm.invalid || !this.isEmailUnique()) {
      this.emailResetForm.markAllAsTouched();
      return;
    }

    const email = this.emailResetForm.controls.emailReset.value;

    this.emitPassReset.emit(email);
    this.emailResetForm.reset();
  }

  emitClose() {
    this.emitCloseInfo.emit();
    this.registrationForm.reset();
    this.isFormReady.set(true);
    this.booleanService.registerLoading.next(false);
    this.booleanService.isRegeisterd.next(false);
  }
}
