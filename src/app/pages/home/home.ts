import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Producto } from '../../services/product';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  productosDestacados: Producto[] = [];
  contadorVisitas = 1250;
  mostrarDescripcion = true;
  
  // Data binding properties
  nombreUsuario = '';
  email = '';

  caracteristicas = [
    {
      icono: 'fas fa-laptop',
      titulo: 'Productos de Tecnología',
      descripcion: 'Los mejores productos tech para tu oficina'
    },
    {
      icono: 'fas fa-headphones',
      titulo: 'Accesorios de Calidad',
      descripcion: 'Accesorios premium para tus dispositivos'
    },
    {
      icono: 'fas fa-shipping-fast',
      titulo: 'Envío Rápido',
      descripcion: 'Recibe tus compras en 24-48 horas'
    },
    {
      icono: 'fas fa-lock',
      titulo: 'Compra Segura',
      descripcion: 'Transacciones protegidas y confiables'
    }
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cargarProductosDestacados();
  }

  cargarProductosDestacados(): void {
    this.productService.obtenerProductos().subscribe({
      next: (data) => {
        this.productosDestacados = data.slice(0, 4);
      },
      error: (err) => {
        console.error('Error cargando productos:', err);
      }
    });
  }
  suscribirse(): void {
    if (this.email) {
      alert(`¡Gracias ${this.nombreUsuario}! Te has suscrito con ${this.email}`);
      this.nombreUsuario = '';
      this.email = '';
    }
  }
}