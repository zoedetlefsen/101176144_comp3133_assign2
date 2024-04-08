import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4000'; // server API URL

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap(() => {
          // Redirect to employee list after successful login
          this.router.navigate(['/employees']);
        })
      );
  }

  signup(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, { username, email, password });
  }
}
