# MTECGYacademic - Tienda en Línea con Angular

Proyecto de tienda en línea desarrollado con Angular 20, que incluye autenticación simulada, gestión de productos, y panel administrativo.

## 🚀 Características

- ✅ 9 páginas funcionales (Home, Productos, Ofertas, Tienda, Contacto, Mi Cuenta, Login, Dashboard, 404)
- ✅ Autenticación con LocalStorage
- ✅ Protección de rutas con AuthGuard
- ✅ Consumo de API REST con JSON Server
- ✅ Bootstrap 5 responsive
- ✅ Todas las features de Angular: Data Binding, Directivas, Pipes
- ✅ Sistema de paginación
- ✅ Búsqueda y filtros de productos

## 📋 Prerequisitos

- Node.js 18+
- Angular CLI 20.3.5
- npm o yarn

## 🔧 Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Instalar JSON Server (si no lo tienes):**
   ```bash
   npm install -g json-server
   ```

## 🏃 Ejecución

### Opción 1: Desarrollo completo (recomendado)

Terminal 1 - Iniciar JSON Server:
```bash
json-server --watch db.json --port 3000
```

Terminal 2 - Iniciar Angular:
```bash
ng serve
# o
npm start
```

Luego acceder a: `http://localhost:4200/`

### Opción 2: Solo Angular (sin API)
```bash
ng serve
```

## 🔐 Credenciales de Prueba

| Rol | Email | Contraseña |
|-----|-------|-----------|
| Admin | admin@mtecgy.com | Admin123 |
| Usuario | user@mtecgy.com | User1234 |

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── footer/
│   │   └── not-found/
│   ├── pages/
│   │   ├── home/
│   │   ├── productos/
│   │   ├── ofertas/
│   │   ├── tienda/
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── mi-cuenta/
│   │   └── contacto/
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── auth.guard.ts
│   │   └── product.ts
│   ├── app.routes.ts
│   └── app.ts
├── index.html
├── main.ts
└── styles.css

db.json (Base de datos simulada)
```

## 🛠️ Desarrollo

### Generar componente
```bash
ng generate component components/nombre-componente
```

### Generar servicio
```bash
ng generate service services/nombre-servicio
```

### Build para producción
```bash
ng build --prod
```

## 🎨 Características Angular Implementadas

### Data Binding
- Interpolación `{{ }}`
- Property Binding `[propiedad]`
- Event Binding `(evento)`
- Two-Way Data Binding `[(ngModel)]`

### Directivas
- `*ngFor` - Iteración de listas
- `*ngIf` - Condicionales
- `[ngClass]` - Clases dinámicas
- `[ngStyle]` - Estilos dinámicos

### Pipes
- `currency` - Formatos monetarios
- `date` - Formato de fechas
- `uppercase` / `lowercase` - Transformación de texto
- `number` - Formato numérico

### Servicios
- AuthService - Autenticación y sesión
- ProductService - Gestión de productos
- AuthGuard - Protección de rutas

## 📱 Responsividad

El proyecto utiliza Bootstrap 5 para garantizar:
- ✅ Diseño mobile-first
- ✅ Grid responsive
- ✅ Menú hamburguesa en móviles
- ✅ Componentes adaptables

## 🔄 Flujo de Autenticación

1. Usuario accede a `/login`
2. Ingresa credenciales y valida
3. Datos se guardan en `LocalStorage`
4. Redirección a `/dashboard`
5. Al cerrar sesión, se limpia `LocalStorage`

## 🗄️ Base de Datos

El archivo `db.json` contiene:
- **productos**: 10 productos de tecnología
- **cursos**: 8 cursos (compatible)

Estructura de producto:
```json
{
  "id": 1,
  "nombre": "Laptop Gamer Pro",
  "imagen": "https://...",
  "categoria": "Tecnología",
  "precio": 4500,
  "stock": 12
}
```

## 📚 Rutas Disponibles

| Ruta | Componente | Protegida | Descripción |
|------|-----------|-----------|------------|
| / | Home | No | Página de inicio |
| /productos | Productos | No | Grid de productos |
| /ofertas | Ofertas | No | Productos con descuento |
| /tienda | Tienda | No | Tabla con paginación |
| /contacto | Contacto | No | Contacto |
| /cursos | Cursos | No | Cursos |
| /login | Login | No | Autenticación |
| /registro | Registro | No | Registro |
| /mi-cuenta | MiCuenta | Sí | Perfil de usuario |
| /dashboard | Dashboard | Sí | Panel administrativo |
| ** | NotFound | No | Página 404 |

## 🐛 Troubleshooting

### Error: Cannot find module '@angular/common/http'
```bash
npm install @angular/common --save
```

### JSON Server no responde
- Verificar que esté corriendo en puerto 3000
- Revisar que db.json exista en la raíz

### LocalStorage no funciona
- Verificar que el navegador tenga cookies habilitadas
- Limpiar caché del navegador

## 📄 Licencia

Proyecto educativo para el curso de JavaScript Avanzado - UTP

## 👨‍💻 Autor

Desarrollado como proyecto del curso JavaScript Avanzado - Ciclo 6 2026-I

---

Para más información ver: `PROYECTO_COMPLETADO.md`

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
