# 📸 Guía para Agregar Imágenes Locales

## Estructura de Carpetas

```
public/
├── images/
│   ├── candidatas/     # Fotos de las candidatas
│   │   ├── ashley.jpg
│   │   ├── valeria.jpg
│   │   └── fatima.jpg
│   │
│   └── galeria/        # Fotos de la galería
│       ├── evento-1.jpg
│       ├── procesion-1.jpg
│       └── ...
```

## 📋 Pasos para Agregar Imágenes

### 1️⃣ **Para Candidatas:**

1. Coloca las fotos en: `public/images/candidatas/`
2. Recomendaciones:
   - Formato: JPG o PNG
   - Tamaño recomendado: 800x1000px (proporción 4:5)
   - Peso: máximo 500KB por imagen
   - Nombres sugeridos: `ashley.jpg`, `valeria.jpg`, `fatima.jpg`

3. Actualiza el archivo `src/data/fiestasData.js`:

```javascript
export const candidatasData = [
  {
    nombre: "Ashley Ninette Guardado Galdamez",
    edad: 12,
    foto: "/images/candidatas/ashley.jpg", // 👈 Cambia aquí
    descripcion: "Representante de la comunidad San Carlos",
    color: "#A13E46"
  },
  // ... resto de candidatas
];
```

### 2️⃣ **Para Galería:**

1. Coloca las fotos en: `public/images/galeria/`
2. Recomendaciones:
   - Formato: JPG o PNG
   - Tamaño recomendado: 1200x800px (proporción 3:2)
   - Peso: máximo 800KB por imagen
   - Nombres descriptivos: `procesion-2024.jpg`, `coronacion.jpg`, etc.

3. Actualiza el archivo `src/data/fiestasData.js`:

```javascript
export const galeriaData = [
  {
    id: 1,
    titulo: "Celebración 2024",
    imagen: "/images/galeria/celebracion-2024.jpg", // 👈 Cambia aquí
    categoria: "eventos"
  },
  // ... resto de imágenes
];
```

## 🎨 Categorías Disponibles para Galería

- `"eventos"` - Eventos especiales
- `"liturgia"` - Misas, procesiones, rosarios
- `"comunidad"` - Actividades comunitarias
- `"infantil"` - Actividades para niños

## ✨ Características de la Galería

- ✅ Click para ver en grande
- ✅ Navegación con flechas (← →)
- ✅ Cerrar con tecla ESC
- ✅ Diseño responsive (Bento Grid)
- ✅ Animaciones suaves
- ✅ Overlay con información

## 🔧 Optimización de Imágenes

### Herramientas Recomendadas:
- **Comprimir:** [TinyPNG](https://tinypng.com/)
- **Redimensionar:** [Squoosh](https://squoosh.app/)
- **Editar:** Photoshop, GIMP, Canva

### Tamaños Recomendados:
```
Candidatas:    800 x 1000 px  (retrato)
Galería:      1200 x 800 px   (paisaje)
Hero Slides:  1920 x 1080 px  (panorámico)
```

## 📝 Ejemplo Completo

```javascript
// src/data/fiestasData.js

export const candidatasData = [
  {
    nombre: "Ashley Ninette Guardado Galdamez",
    edad: 12,
    foto: "/images/candidatas/ashley.jpg",
    descripcion: "Representante de la comunidad San Carlos",
    color: "#A13E46"
  }
];

export const galeriaData = [
  {
    id: 1,
    titulo: "Procesión del Santo Niño",
    imagen: "/images/galeria/procesion-2024.jpg",
    categoria: "liturgia"
  },
  {
    id: 2,
    titulo: "Coronación de la Reina",
    imagen: "/images/galeria/coronacion-2024.jpg",
    categoria: "eventos"
  }
];
```

## ⚠️ Notas Importantes

1. Las rutas deben comenzar con `/` (ej: `/images/...`)
2. No uses espacios en nombres de archivo (usa guiones: `mi-imagen.jpg`)
3. Los nombres son case-sensitive (distinguen mayúsculas/minúsculas)
4. Siempre optimiza las imágenes antes de subirlas
5. El navegador cachea las imágenes, si cambias una imagen con el mismo nombre, es posible que debas limpiar el caché

## 🚀 Para Desarrollo

Si estás trabajando localmente y las imágenes no se ven:
1. Asegúrate de que estén en la carpeta `public/images/`
2. Reinicia el servidor de desarrollo: `npm run dev`
3. Limpia el caché del navegador: Ctrl + Shift + R (Windows) o Cmd + Shift + R (Mac)
