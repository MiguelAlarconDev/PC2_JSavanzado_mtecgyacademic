import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  nombre = '';
  correo = '';
  password = '';

  mensajeError = '';
  mensajeExito = '';

  usuarios: any[] = [];

  validarEmail(email: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }

  validarPassword(password: string): boolean {
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regexPassword.test(password);
  }

  correoDuplicado(correo: string): boolean {
    return this.usuarios.some(usuario => usuario.correo === correo);
  }

  registrarUsuario() {
    this.mensajeError = '';
    this.mensajeExito = '';

    if (!this.nombre || !this.correo || !this.password) {
      this.mensajeError = 'Todos los campos son obligatorios.';
      return;
    }

    if (!this.validarEmail(this.correo)) {
      this.mensajeError = 'Correo electrónico inválido. Ejemplo: correo@ejemplo.com';
      return;
    }

    if (!this.validarPassword(this.password)) {
      this.mensajeError = 'La contraseña debe tener mínimo 8 caracteres, una mayúscula y un número.';
      return;
    }

    if (this.correoDuplicado(this.correo)) {
      this.mensajeError = 'El correo electrónico ya está registrado.';
      return;
    }

    this.usuarios.push({
      nombre: this.nombre,
      correo: this.correo,
      fechaRegistro: new Date()
    });

    this.mensajeExito = '¡Registro exitoso! Bienvenido a MTecGY Academy.';

    this.nombre = '';
    this.correo = '';
    this.password = '';
  }
}
