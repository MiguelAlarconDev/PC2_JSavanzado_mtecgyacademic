# MTECGYacademic

Aplicación web tipo e-commerce desarrollada con Angular para el curso de **JavaScript Avanzado**, implementando componentes reutilizables, navegación mediante Angular Routing, autenticación simulada, consumo de servicios REST con JSON Server y una interfaz responsive utilizando Bootstrap.

---

## Descripción del Proyecto

MTECGYacademic es una plataforma web orientada a la venta y promoción de cursos académicos. La aplicación permite visualizar productos dinámicamente, explorar ofertas, navegar por diferentes categorías, administrar un carrito de compras, acceder a información del usuario autenticado y gestionar contenido mediante un dashboard protegido.

El proyecto fue desarrollado aplicando los conocimientos adquiridos en el curso de JavaScript Avanzado, haciendo uso de Angular, TypeScript, Bootstrap y JSON Server.

---

## Objetivos

### Objetivo General

Desarrollar una aplicación web tipo e-commerce utilizando Angular, aplicando conceptos de componentes, routing, formularios, directivas, servicios REST y despliegue web.

### Objetivos Específicos

* Implementar una arquitectura basada en componentes reutilizables.
* Consumir datos dinámicamente desde una API simulada mediante JSON Server.
* Gestionar la navegación mediante Angular Routing.
* Implementar autenticación simulada utilizando LocalStorage.
* Aplicar formularios con validaciones usando ngModel.
* Diseñar una interfaz responsive utilizando Bootstrap.
* Implementar funcionalidades adicionales como carrito de compras, filtros y búsqueda de productos.

---

## Tecnologías Utilizadas

### Frontend

* Angular
* TypeScript
* HTML5
* CSS3
* Bootstrap 5

### Backend Simulado

* JSON Server

### Herramientas de Desarrollo

* Visual Studio Code
* Node.js
* npm
* Git
* GitHub

---

## Funcionalidades Implementadas

### Navegación

* Navbar reutilizable
* Footer reutilizable
* Angular Routing
* Página 404 personalizada
* Protección de rutas mediante AuthGuard

### Gestión de Usuarios

* Inicio de sesión simulado
* Validación de credenciales
* Persistencia de sesión con LocalStorage
* Cierre de sesión
* Página Mi Cuenta

### Gestión de Productos

* Consumo dinámico desde JSON Server
* Visualización de productos mediante cards
* Buscador de productos
* Filtro por categorías
* Visualización de stock
* Productos destacados

### Carrito de Compras

* Agregar productos
* Eliminar productos
* Actualizar cantidades
* Persistencia mediante LocalStorage
* Contador dinámico en el Navbar

### Dashboard

* Acceso restringido para usuarios autenticados
* Información del usuario logueado
* Estadísticas generales
* Panel administrativo simulado

### Diseño Responsive

* Compatible con computadoras
* Compatible con tablets
* Compatible con dispositivos móviles

---

## Páginas del Sistema

### Home

Página principal con productos destacados y acceso rápido a las diferentes secciones.

### Productos

Visualización dinámica de cursos y productos obtenidos desde JSON Server.

### Ofertas

Sección que muestra productos con descuentos promocionales.

### Tienda

Catálogo general de productos presentado en formato tabular con paginación.

### Contacto

Formulario de contacto con validaciones básicas.

### Mi Cuenta

Información del usuario autenticado.

### Login

Autenticación simulada utilizando LocalStorage.

### Dashboard

Panel administrativo protegido.

### Página 404

Página personalizada para rutas inexistentes.

---

## Características de Angular Implementadas

### Data Binding

* Interpolación {{ }}
* Property Binding [ ]
* Event Binding ( )
* Two-Way Data Binding [(ngModel)]

### Directivas Estructurales

* *ngFor
* *ngIf

### Directivas de Atributo

* [ngClass]
* [ngStyle]

### Pipes

* CurrencyPipe
* UpperCasePipe
* LowerCasePipe
* DatePipe
* NumberPipe

---

## Estructura General del Proyecto

```text
src/
│
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   └── footer/
│   │
│   ├── pages/
│   │   ├── home/
│   │   ├── productos/
│   │   ├── ofertas/
│   │   ├── tienda/
│   │   ├── contacto/
│   │   ├── login/
│   │   ├── mi-cuenta/
│   │   ├── dashboard/
│   │   └── not-found/
│   │
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── product.service.ts
│   │   └── carrito.service.ts
│   │
│   ├── guards/
│   │   └── auth.guard.ts
│   │
│   └── models/
│
├── assets/
│
└── db.json
```

---

## Instalación del Proyecto

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Ingresar al proyecto

```bash
cd MTECGYacademic
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Iniciar JSON Server

```bash
npm run server
```

Servidor disponible en:

```text
http://localhost:3000
```

### 5. Ejecutar Angular

```bash
ng serve
```

Aplicación disponible en:

```text
http://localhost:4200
```

---

## Credenciales de Acceso

Para fines académicos se implementó una autenticación simulada.

### Usuario

```text
admin
```

### Contraseña

```text
Admin123
```

---

## Repositorio

GitHub:

```text
https://github.com/MiguelAlarconDev/PC2_JSavanzado_mtecgyacademic/tree/main

---

## Despliegue

Aplicación desplegada en:
Link:

---

## Integrantes

* Yulisa Nayra Guerrero
* [Agregar integrantes del equipo]

---

## Curso

JavaScript Avanzado

Universidad Tecnológica del Perú - UTP

---

## Proyecto-Pagina web

Proyecto desarrollado con fines académicos para el curso de JavaScript Avanzado.
