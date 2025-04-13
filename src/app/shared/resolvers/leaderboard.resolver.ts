import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { userInterface } from '../interfaces/user.interface';

export const leaderboardResolver: ResolveFn<Observable<userInterface[]>> = (
  route,
  state
) => {
  const userService = inject(UserService);
  return userService.getAllUsers();
};
