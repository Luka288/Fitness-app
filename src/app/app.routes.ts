import { Routes } from '@angular/router';
import { routeGuard } from './shared/guards/route.guard';
import { checkUserGuard } from './shared/guards/check-user.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    title: 'Home Page',
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
    canActivate: [checkUserGuard],
  },

  {
    title: 'Fit APP | Dashboard',
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    canActivate: [routeGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/main-content/main-content.component').then(
            (c) => c.MainContentComponent
          ),
      },

      {
        title: 'Fit APP | Leaderboard',
        path: 'leaderboard',
        loadComponent: () =>
          import('./features/leaderboard/leaderboard.component').then(
            (c) => c.LeaderboardComponent
          ),
      },

      {
        title: 'Fit APP | Add Workout',
        path: 'activity/:id',
        loadComponent: () =>
          import('./features/workout-detail/workout-detail.component').then(
            (c) => c.WorkoutDetailComponent
          ),
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
