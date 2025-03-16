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
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
