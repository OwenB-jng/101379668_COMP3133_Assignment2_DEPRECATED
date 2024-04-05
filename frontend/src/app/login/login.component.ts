import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule], // Make sure FormsModule is imported to use ngModel
  standalone: true
})
export class LoginComponent {
  username = '';
  password = '';

  constructor() {}

  onLogin(formValues: { username: string; password: string }): void {
    // Implement your login logic here
    console.log('Login attempt:', formValues);
  }
}


