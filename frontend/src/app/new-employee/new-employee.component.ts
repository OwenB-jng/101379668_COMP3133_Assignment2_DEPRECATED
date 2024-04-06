import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GraphqlService } from '../graphql.service'; 

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css'],
  imports: [FormsModule], 
  standalone: true
})
export class NewEmployeeComponent {
  firstName = '';
  lastName = '';
  email = '';
  salary = 0;
  gender = '';

  constructor(private graphqlService: GraphqlService, private router: Router) {}

  addEmployee(): void {
    const employeeInput = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      gender: this.gender,
      salary: this.salary,
    };

    this.graphqlService.addEmployee(employeeInput).subscribe({
      next: (response: any) => {
        console.log('Employee added', response.data.addEmployee);
      },
      error: (error) => {
        console.error('Error adding employee', error);
      },
    });
  }
  navigateToEmployeeList() {
    this.router.navigate(['/employee-list']);
  }
}
