import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.signup(this.username, this.email, this.password)
      .subscribe(
        () => {
          console.log('Signup successful');
          // Redirect to login page after successful signup
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Signup error:', error);
        }
      );
  }
}
