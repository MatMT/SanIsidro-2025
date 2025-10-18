# Estructura de Componentes - Fiestas Patronales

## 📁 Estructura del Proyecto

```
src/
├── App.jsx                     # Componente principal (orquestador)
├── components/                 # Componentes reutilizables
│   ├── Header.jsx             # Barra de navegación fija
│   ├── HeroSlider.jsx         # Slider principal con slides
│   ├── FloatingElement.jsx    # Elementos decorativos flotantes
│   ├── BentoGrid.jsx          # Grid de eventos destacados
│   ├── CandidatasSection.jsx  # Slider de candidatas
│   ├── ProgramacionSection.jsx # Programación detallada
│   ├── InformacionSection.jsx  # Información y ubicación
│   └── Footer.jsx             # Pie de página
├── data/                       # Datos separados de la lógica
│   ├── fiestasData.js         # Slides y candidatas
│   └── programacionData.js    # Programación de eventos
└── styles/                     # Estilos globales
    └── animations.js          # Animaciones CSS-in-JS
```

## 🎯 Componentes Principales

### **App.jsx**
- Componente orquestador principal
- Gestiona el estado global (sliders, scroll)
- Coordina las refs para la navegación
- Muy limpio y fácil de leer (menos de 100 líneas)

### **Header.jsx**
- Barra de navegación fija con efecto parallax
- Cambia de estilo al hacer scroll
- Incluye navegación a las secciones

### **HeroSlider.jsx**
- Slider principal con transiciones suaves
- Elementos decorativos flotantes
- Indicadores y navegación automática

### **BentoGrid.jsx**
- Layout tipo Bento Box para eventos
- Responsivo (grid en desktop, stack en mobile)
- Cards con efectos hover

### **CandidatasSection.jsx**
- Slider de candidatas con navegación
- Transiciones suaves
- Botones de navegación manual

### **ProgramacionSection.jsx**
- Programación organizada por días
- Iconos dinámicos según el tipo de evento
- Cards con efectos hover

### **InformacionSection.jsx**
- Información de ubicación
- Descripción del Santo Niño de Atocha
- Call to action final

### **Footer.jsx**
- Pie de página con información resumida
- Animaciones sutiles

## 📊 Datos Separados

### **fiestasData.js**
```javascript
export const slidesData = [...]  // Slides del hero
export const candidatasData = [...] // Candidatas a reina
```

### **programacionData.js**
```javascript
export const programacionData = [...] // Eventos por día
```

## 🎨 Ventajas de esta Estructura

1. **Separación de Responsabilidades**: Cada componente tiene una función específica
2. **Reutilizable**: Los componentes pueden usarse en otros proyectos
3. **Mantenible**: Fácil encontrar y modificar código específico
4. **Escalable**: Fácil agregar nuevas secciones o funcionalidades
5. **Testeable**: Cada componente puede probarse de forma independiente
6. **Datos Separados**: Cambiar contenido sin tocar la lógica

## 🔧 Cómo Modificar

### Cambiar el contenido de los slides:
```javascript
// src/data/fiestasData.js
export const slidesData = [
  { title: "...", subtitle: "...", ... }
]
```

### Añadir una nueva sección:
1. Crear componente en `src/components/NuevaSeccion.jsx`
2. Importar en `App.jsx`
3. Añadir ref si es necesario para navegación
4. Incluir en el return de App

### Modificar estilos:
- Estilos globales: `src/styles/animations.js`
- Estilos de componente: Dentro de cada componente

## 🚀 Próximas Mejoras Sugeridas

1. Crear un componente `Card` genérico para reutilizar
2. Separar los estilos Tailwind en un archivo de configuración
3. Agregar PropTypes o TypeScript para validación
4. Crear un hook personalizado `useSlider` para la lógica de sliders
5. Implementar lazy loading para las imágenes
6. Agregar tests unitarios para cada componente
