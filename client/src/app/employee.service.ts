import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:4000/'; // Replace this with your actual API URL

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/employees`);
  }

  getEmployeeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/employees/${id}`);
  }

  addEmployee(employeeData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/employees`, employeeData);
  }

  updateEmployee(id: string, employeeData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/employees/${id}`, employeeData);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/employees/${id}`);
  }
}
