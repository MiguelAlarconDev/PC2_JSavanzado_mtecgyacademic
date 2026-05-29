import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado$ = new BehaviorSubject<Usuario | null>(null);
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.cargarSesion();
  }

  // Cargar sesión desde LocalStorage
  private cargarSesion(): void {
    if (typeof localStorage !== 'undefined') {
      const usuarioGuardado = localStorage.getItem('usuario');
      if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado);
        this.usuarioAutenticado$.next(usuario);
        this.isLoggedIn$.next(true);
      }
    }
  }

  // Obtener observable del usuario autenticado
  getUsuarioAutenticado(): Observable<Usuario | null> {
    return this.usuarioAutenticado$.asObservable();
  }

  // Obtener observable si está logueado
  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  // Verificar si está logueado (síncrono)
  estaLogueado(): boolean {
    return this.isLoggedIn$.value;
  }

  // Obtener usuario actual (síncrono)
  getUsuarioActual(): Usuario | null {
    return this.usuarioAutenticado$.value;
  }

  // Iniciar sesión
  iniciarSesion(correo: string, password: string): boolean {
    // Validación simulada con credenciales de prueba
    if (correo === 'admin@mtecgy.com' && password === 'Admin123') {
      const usuario: Usuario = {
        id: 1,
        nombre: 'Administrador',
        correo: correo,
        role: 'admin'
      };
      
      // Guardar en LocalStorage
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        localStorage.setItem('sesion_token', 'token_' + Date.now());
      }
      
      this.usuarioAutenticado$.next(usuario);
      this.isLoggedIn$.next(true);
      return true;
    }
    
    if (correo === 'user@mtecgy.com' && password === 'User1234') {
      const usuario: Usuario = {
        id: 2,
        nombre: 'Usuario Demo',
        correo: correo,
        role: 'user'
      };
      
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        localStorage.setItem('sesion_token', 'token_' + Date.now());
      }
      
      this.usuarioAutenticado$.next(usuario);
      this.isLoggedIn$.next(true);
      return true;
    }
    
    return false;
  }

  // Cerrar sesión
  cerrarSesion(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('usuario');
      localStorage.removeItem('sesion_token');
    }
    this.usuarioAutenticado$.next(null);
    this.isLoggedIn$.next(false);
    this.router.navigate(['/']);
  }
}
