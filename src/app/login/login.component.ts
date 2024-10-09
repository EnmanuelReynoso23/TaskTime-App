import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private routerExtensions: RouterExtensions
  ) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      this.routerExtensions.navigate(['/todo'], { clearHistory: true });
    } catch (error) {
      console.error('Login failed:', error);
      // Show error message to user
    }
  }

  async register() {
    try {
      await this.authService.register(this.email, this.password);
      this.routerExtensions.navigate(['/todo'], { clearHistory: true });
    } catch (error) {
      console.error('Registration failed:', error);
      // Show error message to user
    }
  }
}