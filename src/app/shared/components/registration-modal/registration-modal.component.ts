import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmailAuthCredential } from 'firebase/auth';
import { userRegData } from '../../interfaces/user.reg.interface';
import { UserService } from '../../services/user.service';
import { debounceTime } from 'rxjs';
import { where } from 'firebase/firestore';

@Component({
  selector: 'app-registration-modal',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registration-modal.component.html',
  styleUrl: './registration-modal.component.scss',
})
export class RegistrationModalComponent {
  private readonly userService = inject(UserService);

  @Output() emitUserData = new EventEmitter<userRegData>();
  @Output() emitCloseInfo = new EventEmitter<void>();

  errMessage: string = '';
  isFormReady = signal<boolean>(true);

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
      .subscribe((res) => {
        this.checkUSername(res);
      });
  }

  checkUSername(username: string) {
    this.userService.checkUsername(username).subscribe({
      next: (res) => {
        if (res === true) {
          this.errMessage = 'Username already exists';
          this.isFormReady.set(false);
        }

        if (res === false) {
          this.errMessage = '';
          this.isFormReady.set(true);
        }
      },
    });
  }

  emitData() {
    if (this.registrationForm.invalid || this.isFormReady() === false) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.registrationForm.reset();
  }

  emitClose() {
    this.emitCloseInfo.emit();
    this.registrationForm.reset();
    this.isFormReady.set(true);
  }
}
