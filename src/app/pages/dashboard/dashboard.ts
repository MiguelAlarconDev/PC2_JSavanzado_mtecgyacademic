import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, Usuario } from '../../services/auth.service';
import { Router } from '@angular/router';

declare const Chart: any;

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


  @ViewChild('chartLine', { static: false }) chartLineRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartDonut', { static: false }) chartDonutRef!: ElementRef<HTMLCanvasElement>;

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

  ngAfterViewInit(): void {
    // Línea de ingresos mensuales (ejemplo estático)
    try {
      const ctx = (document.getElementById('chartLine') as HTMLCanvasElement).getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
            datasets: [{
              label: 'Ingresos (USD)',
              data: [1200, 1500, 1800, 1400, 3250, 2900, 3600],
              borderColor: 'rgba(43,140,255,0.95)',
              backgroundColor: 'rgba(43,140,255,0.12)',
              tension: 0.3,
              pointRadius: 4,
              pointBackgroundColor: 'rgba(43,140,255,1)'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: { beginAtZero: true }
            },
            plugins: { legend: { display: false } }
          }
        });
      }

      const ctx2 = (document.getElementById('chartDonut') as HTMLCanvasElement).getContext('2d');
      if (ctx2) {
        new Chart(ctx2, {
          type: 'doughnut',
          data: {
            labels: ['Cursos', 'Productos', 'Suscripciones'],
            datasets: [{
              data: [55, 30, 15],
              backgroundColor: ['#2b8cff', '#00c2b8', '#ffc107']
            }]
          },
          options: { responsive: true, maintainAspectRatio: false }
        });
      }
    } catch (err) {
      console.warn('Chart.js no está disponible o hubo un error:', err);
    }
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion();
  }

  generarReporte(): void {
    alert('Generando reporte...');
  }
}
