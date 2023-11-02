import { Routes } from '@angular/router'
import { authGuard } from './shared/guards/auth.guard'

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'users',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./users-list/users.route').then((m) => m.userRoutes),
  },
]
