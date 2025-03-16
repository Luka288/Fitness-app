import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

export const checkUserGuard: CanActivateFn = (route, state) => {
  const fireAuth = inject(Auth);
  const router = inject(Router);

  return new Promise((resolve) => {
    onAuthStateChanged(fireAuth, (user) => {
      resolve(user ? router.parseUrl('/dashboard') : true);
    });
  });
};
