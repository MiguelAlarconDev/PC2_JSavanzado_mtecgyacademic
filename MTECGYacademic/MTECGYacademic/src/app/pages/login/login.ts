import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  correo = '';
  password = '';

  mensajeError = '';
  mensajeExito = '';
  mostrarPassword = false;

  credencialesDemo = [
    { correo: 'admin@mtecgy.com', password: 'Admin123', nombre: 'Administrador' },
    { correo: 'user@mtecgy.com', password: 'User1234', nombre: 'Usuario Demo' }
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  validarEmail(correo: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(correo);
  }

  validarPassword(password: string): boolean {
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regexPassword.test(password);
  }

  iniciarSesion(): void {
    this.mensajeError = '';
    this.mensajeExito = '';

    const correoLimpio = this.correo.trim();

    if (!correoLimpio || !this.password) {
      this.mensajeError = 'Todos los campos son obligatorios.';
      return;
    }

    if (!this.validarEmail(correoLimpio)) {
      this.mensajeError = 'Ingrese un correo electrónico válido. Ejemplo: usuario@correo.com';
      return;
    }

    if (!this.validarPassword(this.password)) {
      this.mensajeError = 'La contraseña debe tener mínimo 8 caracteres, una mayúscula y un número.';
      return;
    }

    // Usar AuthService para iniciar sesión
    if (this.authService.iniciarSesion(correoLimpio, this.password)) {
      this.mensajeExito = 'Inicio de sesión exitoso. Redirigiendo...';

      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 1000);

    } else {
      this.mensajeError = 'Correo o contraseña incorrectos.';
    }
  }

  togglePassword(): void {
    this.mostrarPassword = !this.mostrarPassword;
  }

  autoCompletarCredenciales(credencial: any): void {
    this.correo = credencial.correo;
    this.password = credencial.password;
  }
}