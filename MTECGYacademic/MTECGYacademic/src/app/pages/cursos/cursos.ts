import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductService } from '../../services/product';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule, FormsModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class Cursos implements OnInit {

  cursos: any[] = [];
  carrito: any[] = [];

  mostrarCarrito = false;
  mensajeCompra = '';

  categoriaSeleccionada = 'Todos';
  textoBusqueda = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getCursos().subscribe({
      next: (data) => {
        this.cursos = data;
      },
      error: () => {
        alert('Error al cargar los cursos');
      }
    });
  }

  get cursosFiltrados() {
    let cursos = this.cursos;

    if (this.categoriaSeleccionada !== 'Todos') {
      cursos = cursos.filter(
        curso => curso.categoria === this.categoriaSeleccionada
      );
    }

    if (this.textoBusqueda.trim() !== '') {
      cursos = cursos.filter(
        curso =>
          curso.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
      );
    }

    return cursos;
  }

  agregarCarrito(curso: any) {
    const existente = this.carrito.find(
      item => item.nombre === curso.nombre
    );

    if (existente) {
      existente.cantidad++;
    } else {
      this.carrito.push({
        nombre: curso.nombre,
        precio: curso.precio,
        cantidad: 1
      });
    }
  }

  eliminarProducto(nombreCurso: string) {
    const index = this.carrito.findIndex(
      item => item.nombre === nombreCurso
    );

    if (index > -1) {
      if (this.carrito[index].cantidad > 1) {
        this.carrito[index].cantidad--;
      } else {
        this.carrito.splice(index, 1);
      }
    }
  }

  calcularSubtotal() {
    return this.carrito.reduce(
      (sum, item) => sum + item.precio * item.cantidad,
      0
    );
  }

  aplicarDescuento() {
    const subtotal = this.calcularSubtotal();
    return subtotal > 100 ? subtotal * 0.10 : 0;
  }

  calcularTotal() {
    return this.calcularSubtotal() - this.aplicarDescuento();
  }

  totalItems() {
    return this.carrito.reduce(
      (sum, item) => sum + item.cantidad,
      0
    );
  }

  toggleCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  finalizarCompra() {
    if (this.carrito.length === 0) {
      alert('El carrito está vacío.');
      return;
    }

    const total = this.calcularTotal();

    this.carrito = [];

    this.mensajeCompra =
      'Compra realizada. Total final: S/ ' + total.toFixed(2);
  }
}