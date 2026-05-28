import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Producto } from '../../services/product';

@Component({
  selector: 'app-ofertas',
  imports: [CommonModule],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css'
})
export class Ofertas implements OnInit {
  productosEnOferta: Producto[] = [];
  descuentoPorcentaje = 30;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cargarProductosEnOferta();
  }

  cargarProductosEnOferta(): void {
    this.productService.obtenerProductos().subscribe({
      next: (data) => {
        // Filtrar productos para simular ofertas (los primeros 4)
        this.productosEnOferta = data.slice(0, 4);
      },
      error: (err) => {
        console.error('Error cargando ofertas:', err);
      }
    });
  }

  calcularPrecioConDescuento(precio: number): number {
    return precio - (precio * this.descuentoPorcentaje / 100);
  }

  agregarAlCarrito(producto: Producto): void {
    alert(`${producto.nombre} agregado al carrito con 30% de descuento`);
  }
}
