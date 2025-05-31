/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegura que escanea todos tus archivos React/TypeScript
],
theme: {
    extend: {
    colors: {
        // Ejemplo de personalización de colores (opcional)
        'emeyce-blue': '#1e40af', // Puedes agregar tus colores personalizados
        'emeyce-light': '#f3f4f6',
    },
    fontFamily: {
        // Ejemplo de personalización de fuentes (opcional)
        sans: ['Inter', 'sans-serif'],
    },
    },
},
plugins: [
    // Plugins recomendados para React (opcionales)
    require('@tailwindcss/forms'), // Para estilos de formularios mejorados
    require('@tailwindcss/typography'), // Para tipografía avanzada
  ],
  corePlugins: {
    // Configuraciones avanzadas (opcional)
    preflight: true, // Habilita los estilos base de Tailwind
  }
}