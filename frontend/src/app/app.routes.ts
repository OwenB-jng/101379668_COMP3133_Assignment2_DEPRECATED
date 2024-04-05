import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component'; // Make sure this path is correct

export const routes: Route[] = [
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'employee-list', component: EmployeeListComponent, title: 'Employee List' }, // Add this line
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
