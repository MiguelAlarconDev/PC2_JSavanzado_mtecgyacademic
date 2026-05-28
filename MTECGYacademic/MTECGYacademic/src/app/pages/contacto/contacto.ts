import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

  nombre = '';
  correo = '';
  mensaje = '';

  enviarMensaje() {
    alert(
      'Mensaje enviado por: ' + this.nombre
    );

    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }

}