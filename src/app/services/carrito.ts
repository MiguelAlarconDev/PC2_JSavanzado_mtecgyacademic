import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Carrito {

  private carrito: any[] = [];

  cantidadCarrito = new BehaviorSubject<number>(0);

  constructor() {
    if (typeof window !== 'undefined') {
      const carritoGuardado = localStorage.getItem('carrito');

      if (carritoGuardado) {
        this.carrito = JSON.parse(carritoGuardado);
      }

      this.cantidadCarrito.next(this.contarProductos());
    }
  }

  obtenerCarrito() {
    return this.carrito;
  }

  agregarProducto(producto: any) {
    const productoExistente = this.carrito.find(item => item.id === producto.id);

    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      this.carrito.push({
        ...producto,
        cantidad: 1
      });
    }

    this.guardarCarrito();
  }

  aumentarCantidad(id: any) {
    const producto = this.carrito.find(item => item.id === id);

    if (producto) {
      producto.cantidad += 1;
      this.guardarCarrito();
    }
  }

  disminuirCantidad(id: any) {
    const producto = this.carrito.find(item => item.id === id);

    if (producto) {
      if (producto.cantidad > 1) {
        producto.cantidad -= 1;
      } else {
        this.eliminarProducto(id);
        return;
      }

      this.guardarCarrito();
    }
  }

  eliminarProducto(id: any) {
    this.carrito = this.carrito.filter(item => item.id !== id);
    this.guardarCarrito();
  }

  vaciarCarrito() {
    this.carrito = [];
    this.guardarCarrito();
  }

  calcularTotal() {
    return this.carrito.reduce((total, item) => {
      return total + (item.precio * item.cantidad);
    }, 0);
  }

  contarProductos() {
    return this.carrito.reduce((total, item) => {
      return total + item.cantidad;
    }, 0);
  }

  private guardarCarrito() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }

    this.cantidadCarrito.next(this.contarProductos());
  }
}