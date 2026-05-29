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
  docente?: string;
  descripcion?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  // Obtener productos por categoría
  obtenerPorCategoria(categoria: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}?categoria=${categoria}`);
  }

  // Obtener un producto por ID
  obtenerProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  // Crear nuevo producto
  crearProducto(producto: Omit<Producto, 'id'>): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }

  // Actualizar producto
  actualizarProducto(id: number, producto: Partial<Producto>): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${id}`, producto);
  }

  // Eliminar producto
  eliminarProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Búsqueda de productos
  buscarProductos(termino: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}?nombre_like=${termino}`);
  }

  // Métodos legacy para compatibilidad
  getCursos(): Observable<Producto[]> {
    return this.obtenerProductos();
  }
}
