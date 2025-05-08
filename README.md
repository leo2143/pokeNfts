# 🛒 Tienda Online Responsive

Este proyecto es el resultado de la integración de las consignas correspondientes a los finales de **Programación I** y **Dispositivos Móviles** de la Escuela Da Vinci. La aplicación consiste en una **tienda online responsiva**, desarrollada con tecnologías del frontend, orientada a la experiencia de usuario y con lógica de negocio implementada en JavaScript.

## ✨ Características principales

- Catálogo de productos filtrable por categoría.
- Carrito de compras interactivo con resumen de productos y total.
- Proceso de compra (checkout) con validación de datos del usuario.
- Detalle de producto con galería de imágenes y más información.
- Componente de banner dinámico que muestra ofertas por categoría.
- Página responsive construida con Bootstrap 5 y diseño personalizado.
- Estructura semántica HTML5.
- Uso de localStorage para persistencia del carrito.
- Diseño adaptado para dispositivos móviles.

> 🧑‍🎨 **Nota:** El diseño visual, distribución general del contenido y estilo de la página han sido ideados completamente por mi propia autoría, respetando los lineamientos técnicos solicitados pero aplicando decisiones creativas personales.


## 🧩 Tecnologías y herramientas utilizadas

- **HTML5** y etiquetas semánticas.
- **CSS3** + hoja de estilos propia.
- **Bootstrap 5** (grilla, navbar, cards, carousel, formularios).
- **JavaScript (ES6+)** con manejo avanzado de DOM y validaciones.
- **Flexbox y Grid** en distintas secciones.
- **localStorage** para guardar el carrito de manera persistente.

## 🧪 Funcionalidades implementadas

### 🗂️ Catálogo
- Los productos se obtienen desde un array de objetos.
- Divididos en al menos 3 categorías.
- Cambio de categoría muestra un **banner de oferta temporal** (10 seg).

### 🛍️ Carrito de compras
- Vista accesible desde cualquier punto del sitio.
- Permite agregar, eliminar por unidad o vaciar todo.
- Calcula y muestra subtotal por producto y total general.
- El mismo producto no se duplica, se suma su cantidad.

### 📦 Checkout
- Formulario con validación personalizada por JS (no solo `required`).
- Datos del usuario: nombre, teléfono, email, dirección, fecha.
- Datos del pago: método y cuotas.
- Posibilidad de cancelar y volver al carrito.

### 🔍 Detalle del producto
- Página con más información: galería de imágenes, medios de pago.
- Acceso desde cada tarjeta de producto.

### 📱 Diseño mobile-first
- Implementado con Bootstrap 5.
- Al menos 3 breakpoints trabajados.
- Footer con datos personales y foto (250px ancho).

### 🎨 Componentes Bootstrap personalizados
- Carousel (header)
- Navbar colapsable
- Cards de productos
- Formularios
- Otros elementos como botones y alertas

### 🧠 Validaciones y lógica
- Evita uso de `innerHTML` para elementos con HTML: se utiliza `createElement`.
- No se utilizan `alert`, `prompt` ni `confirm`.
- Se crean elementos dinámicamente con JS solo cuando se solicitan.


Además, se aplicaron buenas prácticas de codificación, organización de directorios y claridad semántica del HTML.

---



