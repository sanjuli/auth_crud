import { CommonModule } from '@angular/common';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class RegisterComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private AuthService: AuthService, private router: Router) {}

  register() {
    console.log('Datos enviados:', {
      username: this.username,
      password: this.password,
    });
    this.AuthService.register(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error al registrar:', error);
      },
    });
  }
}
