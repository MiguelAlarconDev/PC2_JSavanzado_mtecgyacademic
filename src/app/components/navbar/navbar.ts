import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService, Usuario } from '../../services/auth.service';
import { Carrito as CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  buscador = '';
  usuarioActual: Usuario | null = null;
  estaLogueado = false;
  cantidadCarrito = 0;

  constructor(
    private authService: AuthService,
    private carritoService: CarritoService
  ){}

  ngOnInit(): void {
    this.actualizarEstadoAutenticacion();
    this.carritoService.cantidadCarrito.subscribe(cantidad => {
      this.cantidadCarrito = cantidad;
    });
    // Suscribirse a cambios de autenticación
    this.authService.getIsLoggedIn().subscribe(
      (logueado) => {
        this.estaLogueado = logueado;
        if (logueado) {
          this.usuarioActual = this.authService.getUsuarioActual();
        }
      }
    );
  }

  actualizarEstadoAutenticacion(): void {
    this.estaLogueado = this.authService.estaLogueado();
    this.usuarioActual = this.authService.getUsuarioActual();
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion();
  }

}