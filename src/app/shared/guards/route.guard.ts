import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

export const routeGuard: CanActivateFn = (route, state) => {
  const fireAuth = inject(Auth);
  const router = inject(Router);

  return new Promise((resolve) => {
    onAuthStateChanged(fireAuth, (user) => {
      resolve(user ? true : router.parseUrl('/home'));
    });
  });
};
