import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Producto } from '../../services/product';

@Component({
  selector: 'app-tienda',
  imports: [CommonModule],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css'
})
export class Tienda implements OnInit {
  productos: Producto[] = [];
  productosPorPagina = 6;
  paginaActual = 1;
  totalProductos = 0;
  Math = Math; // Para usar Math en el template

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productService.obtenerProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.totalProductos = data.length;
      },
      error: (err) => {
        console.error('Error cargando productos:', err);
      }
    });
  }

  get productosPaginados(): Producto[] {
    const inicio = (this.paginaActual - 1) * this.productosPorPagina;
    return this.productos.slice(inicio, inicio + this.productosPorPagina);
  }

  get totalPaginas(): number {
    return Math.ceil(this.totalProductos / this.productosPorPagina);
  }

  get paginas(): number[] {
    return Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }

  irAPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
    }
  }

  agregarAlCarrito(producto: Producto): void {
    alert(`${producto.nombre} agregado al carrito`);
  }
}
