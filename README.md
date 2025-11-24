# ⚛️ React Ejercicios

Este repositorio contiene una colección de ejercicios prácticos desarrollados en **React** con **Vite**. El objetivo es explorar y afianzar conceptos fundamentales de la librería, desde el manejo básico del estado hasta el uso de Context API y renderizado de listas.

## 📋 Tabla de Contenidos
- [Descripción General](#descripción-general)
- [Ejercicios](#ejercicios)
  - [Ejercicio 02: Contador Simple](#ejercicio-02-contador-simple)
  - [Ejercicio 04: Lista de Tareas](#ejercicio-04-lista-de-tareas)
  - [Ejercicio 05: Galería de Productos](#ejercicio-05-galería-de-productos)
  - [Ejercicio 06: Formulario de Registro](#ejercicio-06-formulario-de-registro)
  - [Ejercicio 07: Context API](#ejercicio-07-context-api)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Ejecución](#instalación-y-ejecución)

## 📖 Descripción General
El proyecto está estructurado en carpetas independientes para cada ejercicio. Cada uno aborda un concepto clave de React, utilizando **Bootstrap** para el estilizado rápido de componentes.

## 🚀 Ejercicios

### [Ejercicio 02: Contador Simple](ejercicio_02)
Implementación básica del hook `useState` para crear un contador interactivo.
* **Funcionalidad:** Permite incrementar y decrementar un valor numérico mediante botones.
* **Conceptos clave:** `useState`, Eventos `onClick`.

### [Ejercicio 04: Lista de Tareas (To-Do List)](ejercicio_04)
Aplicación para gestionar una lista de tareas dinámica.
* **Funcionalidad:**
    * Agregar nuevas tareas a través de un input.
    * Eliminar tareas existentes seleccionándolas por su índice.
    * Renderizado dinámico de listas usando `.map()`.
* **Conceptos clave:** Manejo de Arrays en el estado, inmutabilidad.

### [Ejercicio 05: Galería de Productos](ejercicio_05)
Renderizado de componentes reutilizables basados en un array de datos.
* **Funcionalidad:** Muestra una grilla de tarjetas (*Cards*) de productos (Laptop, Mouse, Teclado) con imagen, nombre y precio.
* **Conceptos clave:** Reutilización de componentes, Props, Renderizado de listas.

### [Ejercicio 06: Formulario de Registro](ejercicio_06)
Manejo de formularios controlados y validaciones simples.
* **Funcionalidad:**
    * Captura de datos (Nombre, Email, Password) en un objeto de estado único.
    * Validación básica para asegurar que todos los campos estén llenos antes de enviar.
    * Feedback visual mediante alertas de error o éxito.
* **Conceptos clave:** Formularios controlados, `e.preventDefault()`, Validación condicional.

### [Ejercicio 07: Context API](ejercicio_07)
Ejemplo de gestión de estado global para compartir datos entre componentes sin usar *props drilling*.
* **Funcionalidad:**
    * `UsuarioProvider`: Encapsula el estado global (`nombre`).
    * Componentes para visualizar y modificar el nombre del usuario actual desde cualquier parte del árbol de componentes.
* **Conceptos clave:** `createContext`, `useContext`, Provider.

## 🛠️ Tecnologías Utilizadas
* **React** (Librería UI)
* **Vite** (Entorno de desarrollo rápido)
* **Bootstrap** (Estilos CSS) - *Utilizado mediante clases como `container`, `btn`, `card`, etc.*.

## 📦 Instalación y Ejecución

Para correr cualquiera de los ejercicios en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2.  **Navegar a la carpeta del ejercicio deseado** (ejemplo con ejercicio_02):
    ```bash
    cd ejercicio_02
    ```

3.  **Instalar dependencias:**
    ```bash
    npm install
    ```

4.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

---
*Este repositorio sirve como guía de aprendizaje y referencia rápida para patrones comunes en React.*
