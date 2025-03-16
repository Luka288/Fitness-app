import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { UserService } from './user.service';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  private readonly FirebaseAuth = inject(Auth);
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);

  async googleAuth() {
    try {
      const provider = new GoogleAuthProvider();

      const user = await signInWithPopup(this.FirebaseAuth, provider);
      this.userService.saveUser();
      // this.userState.next(true);

      this.router.navigate(['/dashboard']);
      return user;
    } catch (error) {
      return error;
    }
  }

  async logOut() {
    try {
      const result = await this.FirebaseAuth.signOut();
      this.router.navigate(['/home']);
    } catch (error) {}
  }
}
