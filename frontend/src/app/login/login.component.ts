import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Adjust the import path if necessary

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule], // FormsModule import is not needed here, it should be in your module
  standalone: true // Ensure Angular version supports standalone components
})
export class LoginComponent {
  usernameOrEmail = ''; // bind to your input with [(ngModel)]
  password = ''; // bind to your input with [(ngModel)]

  // Inject AuthService instead of GraphqlService
  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.usernameOrEmail, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        // Store the token from the response
        localStorage.setItem('token', response.token);
        // Navigate to another route upon successful login
        this.router.navigate(['/employee-list']);
      },
      error: (error) => {
        console.error('Login error', error);
      }
    });
  }
}

