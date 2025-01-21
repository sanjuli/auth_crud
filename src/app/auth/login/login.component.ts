import { CommonModule } from '@angular/common';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private AuthService: AuthService, private router: Router) {}

  login() {
    console.log('Datos enviados:', {
      username: this.username,
      password: this.password,
    });

    this.AuthService.login(this.username, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/profile']);
      },
      error: (error) => {
        console.error('Error al iniciar sesión:', error);
        console.error('Detalles del error:', error.error);
        this.errorMessage = 'Error en las credenciales';
      },
    });
  }
}
