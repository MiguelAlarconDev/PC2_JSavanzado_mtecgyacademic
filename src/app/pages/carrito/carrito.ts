import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carrito as CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  productos: any[] = [];
  mensajeCompra = '';

  constructor(private carritoService: CarritoService) {
    this.productos = this.carritoService.obtenerCarrito();
  }

  aumentarCantidad(id: any) {
    this.carritoService.aumentarCantidad(id);
    this.productos = this.carritoService.obtenerCarrito();
  }

  disminuirCantidad(id: any) {
    this.carritoService.disminuirCantidad(id);
    this.productos = this.carritoService.obtenerCarrito();
  }

  eliminarProducto(id: any) {
    this.carritoService.eliminarProducto(id);
    this.productos = this.carritoService.obtenerCarrito();
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.productos = this.carritoService.obtenerCarrito();
  }

  calcularTotal() {
    return this.carritoService.calcularTotal();
  }

  finalizarCompra() {

    if (this.productos.length === 0) {
      this.mensajeCompra = 'Tu carrito está vacío.';
      return;
    }

    this.mensajeCompra =
      '¡Compra realizada con éxito! Gracias por tu compra.';

    this.carritoService.vaciarCarrito();
    this.productos = this.carritoService.obtenerCarrito();
  }
}