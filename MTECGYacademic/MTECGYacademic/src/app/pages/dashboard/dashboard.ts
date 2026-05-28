import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, Usuario } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  usuario: Usuario | null = null;
  estadisticas = {
    ventasTotal: 15450,
    productosVendidos: 342,
    clientesRegistrados: 128,
    ingresoMensual: 3250
  };

  actividadReciente: any[] = [
    { fecha: '2026-05-25 14:30', accion: 'Nueva venta registrada', monto: 299.90 },
    { fecha: '2026-05-25 13:15', accion: 'Nuevo cliente registrado', monto: 0 },
    { fecha: '2026-05-25 12:00', accion: 'Producto agotado: Mouse Inalámbrico', monto: 0 },
    { fecha: '2026-05-24 16:45', accion: 'Devolución procesada', monto: -89.90 }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario = this.authService.getUsuarioActual();
    if (!this.usuario) {
      this.router.navigate(['/']);
    }
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion();
  }

  generarReporte(): void {
    alert('Generando reporte...');
  }
}
