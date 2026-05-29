import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';
import { Carrito as CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule, FormsModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class Cursos implements OnInit {

  cursos: any[] = [];

  categoriaSeleccionada = 'Todos';
  textoBusqueda = '';

  constructor(
    private productService: ProductService,
    private carritoService: CarritoService
  ) {}

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
    const itemCarrito = {
      id: 'curso-' + curso.id,
      nombre: curso.nombre,
      categoria: curso.categoria,
      precio: curso.precio,
      imagen: curso.imagen,
      stock: 1
    };
    this.carritoService.agregarProducto(itemCarrito);
    alert(`${curso.nombre} agregado al carrito`);
  }
}