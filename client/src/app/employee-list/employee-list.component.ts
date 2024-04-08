import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private router: Router, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getAllEmployees()
      .subscribe(
        (data: any) => {
          this.employees = data;
        },
        error => {
          console.error('Error loading employees:', error);
        }
      );
  }

  viewEmployeeDetails(id: string) {
    this.router.navigate(['/employee-details', id]);
  }

  editEmployee(id: string) {
    this.router.navigate(['/edit-employee', id]);
  }

  deleteEmployee(id: string) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id)
        .subscribe(
          () => {
            // Reload employee list after deletion
            this.loadEmployees();
          },
          error => {
            console.error('Error deleting employee:', error);
          }
        );
    }
  }
}
