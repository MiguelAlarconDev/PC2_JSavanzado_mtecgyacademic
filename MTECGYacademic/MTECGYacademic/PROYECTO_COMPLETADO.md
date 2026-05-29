# 📚 MTECGYacademic - Guía de Uso y Verificación

## ✅ Requisitos Completados

### 1. ✅ Páginas Mínimas Requeridas
Todas las páginas solicitadas han sido creadas:
- **Home** - Página de inicio con productos destacados
- **Productos** - Grid de productos con búsqueda y filtros
- **Ofertas** - Página con descuentos especiales (-30%)
- **Tienda** - Tabla con paginación de 6 productos por página
- **Contacto** - Página de contacto (existente)
- **Mi Cuenta** - Perfil de usuario (protegida)
- **Login** - Formulario de autenticación mejorado
- **Dashboard** - Panel administrativo (protegido)
- **Página 404** - Página personalizada para rutas no encontradas

### 2. ✅ Navegación y Routing
- Angular Routing completamente configurado
- Navbar con navegación entre todas las páginas
- Página 404 automática para rutas inválidas
- Redirección automática al Home si accede a /dashboard sin autenticación
- Rutas protegidas con AuthGuard

### 3. ✅ Simulación de Login
- Login funcional con validaciones básicas
- Credenciales de prueba incluidas:
  - **Admin**: admin@mtecgy.com / Admin123
  - **Usuario**: user@mtecgy.com / User1234
- Almacenamiento en LocalStorage
- Opción de cerrar sesión
- Mostrar/ocultar contraseña
- Auto-completar credenciales de demo

### 4. ✅ Uso Obligatorio de Angular

#### Data Binding:
- ✅ Interpolación `{{ }}` - Se usa en todas las páginas
- ✅ Property Binding `[propiedad]` - Imágenes, clases, estilos
- ✅ Event Binding `(evento)` - Botones, formularios
- ✅ Two-Way Data Binding `[(ngModel)]` - Formularios y búsqueda

#### Directivas Estructurales:
- ✅ `*ngFor` - Listas de productos, características
- ✅ `*ngIf` - Condicionales (stock, mensajes, autenticación)

#### Directivas de Atributos:
- ✅ `[ngClass]` - Clases dinámicas según estado
- ✅ `[ngStyle]` - Estilos dinámicos

#### Pipes (2+ implementados):
- ✅ CurrencyPipe - `{{ precio | currency:'USD' }}`
- ✅ DatePipe - `{{ fecha | date:'dd/MM/yyyy' }}`
- ✅ UppercasePipe - `{{ nombre | uppercase }}`
- ✅ LowercasePipe - `{{ email | lowercase }}`

### 5. ✅ Bootstrap 5
- ✅ Bootstrap 5.3 integrado en index.html
- ✅ Grid responsive en todas las páginas
- ✅ Cards con estilos mejorados
- ✅ Navbar responsive con menú mobile
- ✅ Formularios con validación visual
- ✅ Botones con estilos consistentes
- ✅ Tablas con hover effects
- ✅ Interfaz responsive (desktop y mobile)

### 6. ✅ Base de Datos Simulada con JSON Server
- ✅ archivo `db.json` con estructura completa
- ✅ Tabla "productos" con 10 productos
- ✅ Tabla "cursos" preservada (compatible)
- ✅ Estructura de productos:
  ```json
  {
    "id": 1,
    "nombre": "Producto",
    "imagen": "URL",
    "categoria": "Categoría",
    "precio": 100,
    "stock": 10
  }
  ```

### 7. ✅ Consumo de Servicios REST
- ✅ ProductService creado
- ✅ Consumo de API desde `http://localhost:3000/productos`
- ✅ Manejo de errores con fallback
- ✅ Observable subscription en componentes

### 8. ✅ Página de Productos
- ✅ Renderización dinámica desde db.json
- ✅ Muestra: Imagen, Nombre, Categoría, Precio, Stock
- ✅ Buscador funcional
- ✅ Filtro por categorías
- ✅ Cards responsive

### 9. ✅ Dashboard
- ✅ Página protegida con AuthGuard
- ✅ Bienvenida personalizada al usuario
- ✅ Información del usuario logueado
- ✅ Estadísticas básicas
- ✅ Actividad reciente
- ✅ Acceso restringido mediante LocalStorage

### 10. ✅ Servicios Creados

#### AuthService:
- Gestión de autenticación
- LocalStorage para persistencia
- Observable pattern para reactividad
- Métodos: iniciarSesion, cerrarSesion, estaLogueado

#### ProductService:
- Consumo de API REST
- Métodos CRUD simulados
- Búsqueda y filtrado
- Observable pattern

#### AuthGuard:
- Protección de rutas
- Redirección automática

---

## 🚀 Cómo Usar el Proyecto

### 1. Instalar dependencias:
```bash
npm install
```

### 2. Iniciar JSON Server:
```bash
npm install -g json-server  # Si no está instalado
json-server --watch db.json --port 3000
```

### 3. Iniciar la aplicación Angular:
```bash
ng serve
# o
npm start
```

### 4. Acceder a la aplicación:
- Abrir navegador: `http://localhost:4200`

---

## 🔐 Flujo de Autenticación

### Login:
1. Ir a `/login`
2. Usar credenciales de demo o ingresar propias
3. Se guarda en LocalStorage
4. Redirección a `/dashboard`

### Acceso a rutas protegidas:
- Sin login → Redirección a `/`
- Con login → Acceso permitido

### Logout:
- Click en usuario → Cerrar Sesión
- Se limpia LocalStorage
- Redirección a `/`

---

## 📊 Características Especiales

### Home:
- Slider de características
- Newsletter con validación
- Two-way binding en formulario

### Productos:
- Búsqueda en tiempo real
- Filtro por categorías
- Grid responsive (1-4 columnas)

### Ofertas:
- Descuento del 30% visualizado
- Cálculo de precio con descuento

### Tienda:
- Paginación de productos
- Tabla con información completa
- Badges de stock

### Mi Cuenta:
- Historial de compras
- Información de perfil
- Badges de estado

### Dashboard:
- Tarjetas de estadísticas con iconos
- Tabla de actividad reciente
- Dropdown de acciones

---

## 🎨 Estilos y Diseño

- **Colores principales**: Morado (#667eea), Rosa (#764ba2)
- **Fuente**: Bootstrap defaults
- **Iconos**: Font Awesome 6.4
- **Responsive**: Mobile-first approach

---

## ✨ Angular Features Implementadas

| Feature | Ubicación | Ejemplo |
|---------|-----------|---------|
| Interpolación | Home | `{{ contadorVisitas \| number }}` |
| Property Binding | Productos | `[disabled]="producto.stock === 0"` |
| Event Binding | Todos | `(click)="agregarAlCarrito()"` |
| Two-Way Binding | Home, Login | `[(ngModel)]="email"` |
| *ngFor | Tienda, Productos | `*ngFor="let p of productos"` |
| *ngIf | Dashboard | `*ngIf="usuario; else sinAuth"` |
| [ngClass] | Ofertas | `[ngClass]="{'active': page === current}"` |
| [ngStyle] | Productos | `[style.height]="'200px'"` |
| Pipes | Todas | Currency, Date, Uppercase |

---

## 📝 Notas Importantes

1. **JSON Server**: Asegúrate de ejecutarlo en puerto 3000
2. **LocalStorage**: Se usa para persistencia de sesión
3. **Imágenes**: Usa URLs de Unsplash
4. **Bootstrap**: Incluido vía CDN
5. **Font Awesome**: Incluido vía CDN

---

## 🐛 Troubleshooting

### Error de conexión a API:
- Verificar que JSON Server esté corriendo
- Puerto debe ser 3000

### LocalStorage no funciona:
- Verificar que localStorage esté habilitado
- Limpiar caché del navegador

### Estilos no se cargan:
- Verificar que Bootstrap esté en index.html
- Recargar página con Ctrl+Shift+R

---

**Proyecto completado ✅**
