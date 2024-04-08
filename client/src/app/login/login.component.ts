import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.login(this.email, this.password)
      .subscribe(
        () => {
          console.log('Login successful');
          // Redirect to employee list after successful login
          this.router.navigate(['/employee-list']);
        },
        error => {
          console.error('Login error:', error);
        }
      );
  }
}
