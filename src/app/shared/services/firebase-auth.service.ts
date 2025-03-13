import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { signInWithPopup } from 'firebase/auth';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  private readonly FirebaseAuth = inject(Auth);
  private readonly userService = inject(UserService);

  async googleSing() {
    try {
      const provider = new GoogleAuthProvider();

      const user = await signInWithPopup(this.FirebaseAuth, provider);
      this.userService.saveUser();
      return user;
    } catch (error) {
      return error;
    }
  }

  async logOut() {
    try {
      const result = await this.FirebaseAuth.signOut();
    } catch (error) {}
  }
}
