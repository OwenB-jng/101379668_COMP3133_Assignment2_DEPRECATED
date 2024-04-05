// src/app/app.routes.ts
import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Route[] = [
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Confirm pathMatch is strictly typed
];
