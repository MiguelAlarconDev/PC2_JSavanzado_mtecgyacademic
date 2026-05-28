import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Cursos } from './pages/cursos/cursos';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contacto } from './pages/contacto/contacto';
import { Registro } from './pages/registro/registro';
import { Login } from './pages/login/login';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cursos', component: Cursos },
  { path: 'nosotros', component: Nosotros },
  { path: 'contacto', component: Contacto },
  { path: 'registro', component: Registro },
  { path: 'login', component: Login },
  {path: '**', component: NotFound }
];