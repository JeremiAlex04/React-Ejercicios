# ⚛️ React Ejercicios

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

Una colección de ejercicios prácticos para dominar los conceptos fundamentales de **React**.

[Ejercicios](#-ejercicios) • [Instalación](#-instalación-y-ejecución) • [Tecnologías](#️-tecnologías-utilizadas)

---

</div>

## 📖 Descripción General

Este repositorio contiene ejercicios progresivos diseñados para explorar y afianzar los conceptos fundamentales de React, desde el manejo básico del estado hasta patrones avanzados como Context API. Cada ejercicio está estructurado en carpetas independientes con ejemplos prácticos y aplicables.

---

## 🎯 Ejercicios

### 📊 Ejercicio 02: Contador Simple

<details>
<summary><strong>Ver detalles</strong></summary>

Implementación básica del hook `useState` para crear un contador interactivo.

**📋 Funcionalidad:**
- ➕ Incrementar valor numérico
- ➖ Decrementar valor numérico
- 🔄 Actualización en tiempo real

**💡 Conceptos clave:**
- `useState` Hook
- Manejo de eventos `onClick`
- Estado local de componentes

**📂 Carpeta:** [`ejercicio_02`](ejercicio_02)

</details>

---

### ✅ Ejercicio 04: Lista de Tareas (To-Do List)

<details>
<summary><strong>Ver detalles</strong></summary>

Aplicación completa para gestionar una lista de tareas dinámica.

**📋 Funcionalidad:**
- ➕ Agregar nuevas tareas mediante input
- 🗑️ Eliminar tareas por índice
- 📝 Renderizado dinámico de listas
- 🔄 Actualización inmediata del estado

**💡 Conceptos clave:**
- Manejo de Arrays en el estado
- Inmutabilidad de datos
- Métodos `.map()` y `.filter()`
- Manejo de formularios simples

**📂 Carpeta:** [`ejercicio_04`](ejercicio_04)

</details>

---

### 🛍️ Ejercicio 05: Galería de Productos

<details>
<summary><strong>Ver detalles</strong></summary>

Sistema de renderizado de componentes reutilizables basados en datos.

**📋 Funcionalidad:**
- 🖼️ Grilla de tarjetas de productos
- 📱 Diseño responsivo con Bootstrap
- 💳 Visualización de imagen, nombre y precio
- 🎨 Componentes estilizados y reutilizables

**💡 Conceptos clave:**
- Reutilización de componentes
- Props y prop-types
- Renderizado de listas
- Composición de componentes

**📂 Carpeta:** [`ejercicio_05`](ejercicio_05)

</details>

---

### 📝 Ejercicio 06: Formulario de Registro

<details>
<summary><strong>Ver detalles</strong></summary>

Implementación de formularios controlados con validaciones.

**📋 Funcionalidad:**
- 👤 Captura de datos (Nombre, Email, Password)
- ✔️ Validación de campos requeridos
- 🚨 Feedback visual con alertas
- 🎯 Prevención de envío por defecto

**💡 Conceptos clave:**
- Formularios controlados
- `e.preventDefault()`
- Validación condicional
- Manejo de múltiples inputs
- Estado complejo (objetos)

**📂 Carpeta:** [`ejercicio_06`](ejercicio_06)

</details>

---

### 🌐 Ejercicio 07: Context API

<details>
<summary><strong>Ver detalles</strong></summary>

Gestión de estado global sin *prop drilling*.

**📋 Funcionalidad:**
- 🔄 Estado compartido entre componentes
- 👤 Provider de usuario global
- 📤 Visualización del estado en múltiples componentes
- ✏️ Modificación del estado desde cualquier nivel

**💡 Conceptos clave:**
- `createContext`
- `useContext` Hook
- Provider y Consumer pattern
- Evitar prop drilling
- Estado global de aplicación

**📂 Carpeta:** [`ejercicio_07`](ejercicio_07)

</details>

---

## 🛠️ Tecnologías Utilizadas

<table>
<tr>
<td align="center" width="200">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="50" height="50" alt="React"/>
<br/><strong>React</strong>
<br/>Librería UI
</td>
<td align="center" width="200">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" width="50" height="50" alt="Vite"/>
<br/><strong>Vite</strong>
<br/>Build Tool
</td>
<td align="center" width="200">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" width="50" height="50" alt="Bootstrap"/>
<br/><strong>Bootstrap 5</strong>
<br/>Framework CSS
</td>
</tr>
</table>

### Herramientas y Patrones

- 🎣 **React Hooks** - `useState`, `useContext`
- 🧩 **Componentes Funcionales** - Arquitectura moderna
- 📦 **ES Modules** - Importación y exportación
- 🎨 **Bootstrap Classes** - `container`, `btn`, `card`, etc.

---

## 📦 Instalación y Ejecución

### Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn

### Pasos de Instalación

**1️⃣ Clonar el repositorio:**
```bash
git clone <URL_DEL_REPOSITORIO>
cd react-ejercicios
```

**2️⃣ Navegar al ejercicio deseado:**
```bash
cd ejercicio_02  # O cualquier otro ejercicio
```

**3️⃣ Instalar dependencias:**
```bash
npm install
```

**4️⃣ Ejecutar el servidor de desarrollo:**
```bash
npm run dev
```

**5️⃣ Abrir en el navegador:**

El proyecto estará disponible en `http://localhost:5173`

### Comandos Disponibles
```bash
# Modo desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Linting (si está configurado)
npm run lint
```

---

## 📚 Roadmap de Aprendizaje
```
📖 Nivel Básico
   └─ Ejercicio 02: useState y eventos

📖 Nivel Intermedio
   ├─ Ejercicio 04: Manejo de listas
   ├─ Ejercicio 05: Props y componentes
   └─ Ejercicio 06: Formularios controlados

📖 Nivel Avanzado
   └─ Ejercicio 07: Context API
```

---

## 🤝 Contribuciones

¿Tienes ideas para nuevos ejercicios? ¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/NuevoEjercicio`)
3. Commit tus cambios (`git commit -m 'Add: Ejercicio X'`)
4. Push a la rama (`git push origin feature/NuevoEjercicio`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 📧 Contacto

¿Preguntas o sugerencias? Abre un issue o contacta al equipo de desarrollo.

---

<div align="center">

**Construido con 💙 para la comunidad de React**

⭐ Si este repositorio te ayudó en tu aprendizaje, ¡considera darle una estrella!

---

*Este repositorio sirve como guía de aprendizaje y referencia rápida para patrones comunes en React.*

</div>
