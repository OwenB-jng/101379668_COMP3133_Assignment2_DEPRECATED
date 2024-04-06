import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  standalone: true,
  imports: [CommonModule] 
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private graphqlService: GraphqlService, private router: Router) {}

  ngOnInit(): void {
    this.graphqlService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (error) => {
        console.error('Error fetching employees', error);
      }
    });
  }
  navigateToEmployeeCreate() {
    this.router.navigate(['/new-employee']);
  }
}
