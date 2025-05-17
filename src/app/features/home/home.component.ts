import { Component, inject, signal } from '@angular/core';
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
import { sidePanel } from '../../shared/consts/header';
import { RegistrationModalComponent } from '../../shared/components/registration-modal/registration-modal.component';
import { userRegData } from '../../shared/interfaces/user.reg.interface';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RegistrationModalComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly AuthService = inject(FirebaseAuthService);
  private readonly dataService = inject(DataService);
  private readonly userService = inject(UserService);

  modalOpen = signal<boolean>(false);

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

  loginUser(email: string, password: string) {
    this.userService.loginUser(email, password);
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

  toggleModal() {
    this.modalOpen.set(!this.modalOpen());
  }
}
