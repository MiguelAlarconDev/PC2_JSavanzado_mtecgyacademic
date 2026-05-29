import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Producto } from '../../services/product';
import { Carrito as CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  categorias: string[] = [];
  buscador = '';
  categoriaSeleccionada = 'Todas';

  constructor(
  private productService: ProductService,
  private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productService.obtenerProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.productosFiltrados = data;
        this.extraerCategorias();
      },
      error: (err) => {
        console.error('Error cargando productos:', err);
        // Usar datos de prueba si hay error
        this.productosFiltrados = this.productos;
      }
    });
  }

  extraerCategorias(): void {
    const cats = new Set(this.productos.map(p => p.categoria));
    this.categorias = ['Todas', ...Array.from(cats)];
  }

  filtrar(): void {
    this.productosFiltrados = this.productos.filter(p => {
      const cumpleBusqueda = p.nombre.toLowerCase().includes(this.buscador.toLowerCase());
      const cumpleCategoria = this.categoriaSeleccionada === 'Todas' || p.categoria === this.categoriaSeleccionada;
      return cumpleBusqueda && cumpleCategoria;
    });
  }

  onBuscadorChange(): void {
    this.filtrar();
  }

  onCategoriaChange(): void {
    this.filtrar();
  }

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarProducto(producto);
    alert(`${producto.nombre} agregado al carrito`);
  }
}
