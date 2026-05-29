import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  categoria: string;
  precio: number;
  stock: number;
}

export interface Curso {
  id: number;
  nombre: string;
  docente: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productosUrl = 'http://localhost:3000/productos';
  private cursosUrl = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productosUrl);
  }

  // Obtener productos por categoría
  obtenerPorCategoria(categoria: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.productosUrl}?categoria=${categoria}`);
  }

  // Obtener un producto por ID
  obtenerProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.productosUrl}/${id}`);
  }

  // Crear nuevo producto
  crearProducto(producto: Omit<Producto, 'id'>): Observable<Producto> {
    return this.http.post<Producto>(this.productosUrl, producto);
  }

  // Actualizar producto
  actualizarProducto(id: number, producto: Partial<Producto>): Observable<Producto> {
    return this.http.put<Producto>(`${this.productosUrl}/${id}`, producto);
  }

  // Eliminar producto
  eliminarProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.productosUrl}/${id}`);
  }

  // Búsqueda de productos
  buscarProductos(termino: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.productosUrl}?nombre_like=${termino}`);
  }

  // Obtener todos los cursos
  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.cursosUrl);
  }
}
