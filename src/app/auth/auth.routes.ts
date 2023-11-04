import { Routes } from '@angular/router'

export const authRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent,
      ),
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./components/signin/signin.component').then(
        (m) => m.SigninComponent,
      ),
  },
]
