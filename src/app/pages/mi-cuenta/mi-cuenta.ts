import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, Usuario } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-cuenta',
  imports: [CommonModule],
  templateUrl: './mi-cuenta.html',
  styleUrl: './mi-cuenta.css'
})
export class MiCuenta implements OnInit {
  usuario: Usuario | null = null;
  fechaRegistro: Date = new Date();
  comprasRecientes: any[] = [
    { id: 1, fecha: '2026-05-20', monto: 299.90, estado: 'Completada' },
    { id: 2, fecha: '2026-05-18', monto: 89.90, estado: 'Completada' },
    { id: 3, fecha: '2026-05-15', monto: 599.90, estado: 'En tránsito' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.usuario = this.authService.getUsuarioActual();
    if (!this.usuario) {
      this.router.navigate(['/']);
    }
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion();
  }

  editarPerfil(): void {
    alert('Funcionalidad de edición de perfil en desarrollo');
  }

  descargarFactura(compraId: number): void {
    alert(`Descargando factura de compra #${compraId}`);
  }
}
