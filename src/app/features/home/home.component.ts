import { Component, computed, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseAuthService } from '../../shared/services/firebase-auth.service';
import { CommonModule } from '@angular/common';
import { DataService } from '../../shared/services/data.service';
import { UserService } from '../../shared/services/user.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegistrationModalComponent } from '../../shared/components/registration-modal/registration-modal.component';
import { userRegData } from '../../shared/interfaces/user.reg.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { BooleanService } from '../../shared/services/boolean.service';
import { PasswordResetModalComponent } from '../../shared/components/password-reset-modal/password-reset-modal.component';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RegistrationModalComponent,
    PasswordResetModalComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly AuthService = inject(FirebaseAuthService);
  private readonly dataService = inject(DataService);
  private readonly userService = inject(UserService);
  private readonly booleanService = inject(BooleanService);

  ngOnInit(): void {
    this.userLoginForm.controls.email.valueChanges
      .pipe(debounceTime(350))
      .subscribe((res) => (res === '' ? null : this.validateEmail(res)));
  }

  modalOpen = signal<boolean>(false);
  passReset = signal<boolean>(false);

  userLoginForm = new FormGroup({
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
  });

  BTNS = this.dataService.getHeaderButtons();

  userData = toSignal(this.userService.getAllUsers(), { initialValue: [] });

  count = computed(() => this.userData().length);

  workoutCount = computed(() =>
    this.userData().reduce(
      (acc, user) => acc + (user.activities?.length || 0),
      0
    )
  );

  validateEmail(email: string) {
    this.userService.checkEmail(email).subscribe({
      next: (res) => {
        if (!res) {
          this.userLoginForm.controls.email.setErrors({
            emailNotFound: true,
          });
        }

        if (res) {
          this.userLoginForm.controls.email.setErrors({
            emailNotFound: false,
          });
        }
      },
    });
  }

  loginUser(email: string, password: string) {
    this.userService.loginUser(email, password);
  }

  passwordReset(email: string) {
    this.userService.passwordReset(email);
  }

  openReset(bool: boolean) {
    this.passReset.set(bool);
  }

  submitUser() {
    if (this.userLoginForm.invalid) {
      this.userLoginForm.markAllAsTouched();
      return;
    }

    const userForm = {
      email: this.userLoginForm.controls.email.value,
      password: this.userLoginForm.controls.password.value,
    };

    this.loginUser(userForm.email, userForm.password);
  }

  register(data: userRegData) {
    this.userService.registerUser(data.email, data.password, data.username);
  }

  googleAuth() {
    this.AuthService.googleAuth();
  }

  testLogout() {
    this.AuthService.logOut();
  }

  toggleModal(isReset: boolean) {
    this.modalOpen.set(!this.modalOpen());
    this.booleanService.forgotPasswordToggle.next(isReset);
  }
}
