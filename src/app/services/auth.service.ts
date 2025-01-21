import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth';
  // // auth.service.ts; // Cambia la URL si es necesario
  // URL del backend

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, {
      usuario: username,
      contrasenna: password,
    });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, {
      usuario: username, // Correct parameter name
      contrasenna: password,
    });
  }
}
