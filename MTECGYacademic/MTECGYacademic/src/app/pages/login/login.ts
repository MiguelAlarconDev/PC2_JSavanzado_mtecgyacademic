import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

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

  constructor(private router: Router) {}

  validarEmail(correo: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(correo);
  }

  validarPassword(password: string): boolean {
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regexPassword.test(password);
  }

  iniciarSesion() {
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

    if (correoLimpio === 'admin@mtecgy.com' && this.password === 'Admin123') {
      this.mensajeExito = 'Inicio de sesión exitoso. Redirigiendo al inicio...';

      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1000);

    } else {
      this.mensajeError = 'Correo o contraseña incorrectos.';
    }
  }
}