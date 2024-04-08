import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employee: any = {
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    salary: null
  };

  constructor(private router: Router, private employeeService: EmployeeService) {}

  addEmployee() {
    this.employeeService.addEmployee(this.employee)
      .subscribe(
        () => {
          console.log('Employee added successfully');
          this.router.navigate(['/employees']); // Navigate back to employee list after adding
        },
        error => {
          console.error('Error adding employee:', error);
        }
      );
  }
}
