# Lamparosos 🟢👕

**Sátira, humor negro y verdades incómodas. No nos hacemos cargo si alguien se ofende.**

Bienvenidos al repositorio oficial de **Lamparosos**, una marca de camisetas que hablan por ti. Este proyecto es el *frontend* de nuestra tienda de comercio electrónico, diseñado para ofrecer una experiencia de usuario premium, oscura e impactante, con un toque "streetwear" y detalles en nuestro característico verde ácido.

## 🚀 Tecnologías Principales

Este proyecto fue construido utilizando herramientas de última generación para asegurar el máximo rendimiento y una UI espectacular:

- **[Next.js 15 (App Router)](https://nextjs.org/)**: Renderizado híbrido, ruteo avanzado y un rendimiento increíble.
- **[Tailwind CSS](https://tailwindcss.com/)**: Diseño a medida, desde nuestra paleta de colores personalizada hasta las animaciones de Marquesina (Ticker Tape).
- **[Medusa.js](https://medusajs.com/)**: El motor de comercio electrónico headless que alimenta los datos de nuestros productos. (Actualmente funcionando con datos simulados vía mock para desarrollo UI).
- **[TypeScript](https://www.typescriptlang.org/)**: Para un código seguro y sin errores.

## ✨ Características Destacadas

- **Diseño Premium**: Interfaz en modo oscuro profundo con detalles de neón verde ácido.
- **Efectos de Interacción (WOW Factor)**: 
  - Tarjetas de producto con *glow effect*, escalado suave y overlay oscuro.
  - Botones redondos masivos con brillos interactivos.
  - Marquesina animada infinita en la página de inicio.
- **Página de Detalle de Producto Mejorada**: Títulos masivos, precios luminosos y selector de tallas cuadrado moderno.
- **Optimizado para Imágenes**: Uso de `object-contain` en las galerías para que nuestros diseños jamás sean recortados.

## 🛠️ Cómo correr el proyecto localmente

### 1. Clonar el repositorio
```bash
git clone https://github.com/DiegoRozo23/lamparosos.git
cd lamparosos
```

### 2. Instalar las dependencias
Asegúrate de tener Node.js instalado y ejecuta:
```bash
npm install
```

### 3. Configurar variables de entorno
Copia el archivo de ejemplo para las variables locales:
```bash
cp .env.template .env.local
```

### 4. Iniciar el servidor de desarrollo
El proyecto incluye un mock interno para cargar nuestros diseños locales, así que no necesitas el servidor de Medusa funcionando para probar el frontend visualmente.

```bash
npm run dev
```

Abre tu navegador y entra a `http://localhost:8000`. ¡Prepárate para ofenderte (o reírte)!

---
*Hecho con 💚 (ácido) para los que no se toman la vida tan en serio.*
