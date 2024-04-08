import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-update-employee',
  templateUrl: './view-update-employee.component.html',
  styleUrls: ['./view-update-employee.component.css']
})
export class ViewUpdateEmployeeComponent implements OnInit {
  employee: any;
  isEditMode: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadEmployeeDetails(id);
    } else {
      console.log("No Employee ID provided")
    }
  }

  loadEmployeeDetails(id: string) {
    this.employeeService.getEmployeeById(id)
      .subscribe(
        (data: any) => {
          this.employee = data;
        },
        error => {
          console.error('Error loading employee details:', error);
        }
      );
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  saveChanges() {
    this.employeeService.updateEmployee(this.employee._id, this.employee)
      .subscribe(
        () => {
          console.log('Employee details updated successfully');
          this.toggleEditMode(); 
        },
        error => {
          console.error('Error updating employee details:', error);
        }
      );
  }

  cancelEdit() {
    this.loadEmployeeDetails(this.employee._id);
    this.toggleEditMode();
  }
}
