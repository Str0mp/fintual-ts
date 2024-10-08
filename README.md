# Portfolio Profit Calculator

Este proyecto implementa un portafolio de acciones utilizando TypeScript. El portafolio contiene múltiples acciones (Stocks) y permite calcular el beneficio total entre dos fechas, además de calcular el retorno anualizado.

## Características

- Modelo `Stock` para almacenar precios por fecha.
- Modelo `Portfolio` para gestionar un conjunto de acciones y calcular el beneficio entre dos fechas.
- Cálculo del retorno anualizado del portafolio entre dos fechas.

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalados los siguientes programas:

- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Str0mp/fintual-ts.git
   cd fintual-ts
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Compila el código TypeScript a JavaScript:

   ```bash
   npm run build
   ```

4. Ejecuta el proyecto:

   ```bash
   npm start
   ```

## Estructura del proyecto

```bash
├─ .git
├─ .gitignore
├─ src
│  ├─ models
│  │  ├─ Portfolio.ts      # Modelo para el portafolio de acciones
│  │  └─ Stock.ts          # Modelo para una acción individual
│  └─ app
│     └─ main.ts           # Script principal para ejecutar el proyecto
└─ README.md
```

## Uso

El proyecto permite calcular el beneficio total y el retorno anualizado de un portafolio de acciones entre dos fechas específicas.

1. Modifica los precios de las acciones en el archivo `main.ts` para ajustar las fechas y precios a tus necesidades.
2. Ejecuta el proyecto con `npm start` para ver los resultados en la consola.
