import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { userPublicData } from '../interfaces/user.interface';

export const leaderboardResolver: ResolveFn<Observable<userPublicData[]>> = (
  route,
  state
) => {
  const userService = inject(UserService);
  return userService.getPublicUsers();
};
