import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Cursos } from './pages/cursos/cursos';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contacto } from './pages/contacto/contacto';
import { Registro } from './pages/registro/registro';
import { Login } from './pages/login/login';
import { Productos } from './pages/productos/productos';
import { Ofertas } from './pages/ofertas/ofertas';
import { Tienda } from './pages/tienda/tienda';
import { MiCuenta } from './pages/mi-cuenta/mi-cuenta';
import { Dashboard } from './pages/dashboard/dashboard';
import { NotFound } from './components/not-found/not-found';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cursos', component: Cursos },
  { path: 'nosotros', component: Nosotros },
  { path: 'contacto', component: Contacto },
  { path: 'registro', component: Registro },
  { path: 'login', component: Login },
  { path: 'productos', component: Productos },
  { path: 'ofertas', component: Ofertas },
  { path: 'tienda', component: Tienda },
  { path: 'mi-cuenta', component: MiCuenta, canActivate: [AuthGuard] },
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
  { path: '**', component: NotFound }
];