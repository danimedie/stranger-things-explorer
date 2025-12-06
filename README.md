# 👾 Stranger Things Explorer (React)

> Pregunté a ChatGPT por un enunciado para reforzar conceptos y este fue el resultado.

## 📝 Enunciado

Crea una aplicación llamada **Stranger Things Explorer** utilizando **React**, **react-router-dom** y **Tailwind CSS**, que consuma datos de la API pública de Stranger Things:

https://strangerthingsapi.netlify.app/docs

La aplicación debe permitir explorar información del universo de Stranger Things mediante varias páginas.

---

## 🧭 Funcionalidades

### 🏠 Home
- Página principal con una breve introducción.
- Navegación hacia el resto de secciones.

### 🧑‍🤝‍🧑 Characters
- Listado de personajes obtenidos desde la API (`/characters`).
- Mostrar por cada personaje:
  - Nombre
  - Imagen
  - Estado (alive / deceased)
- Cada personaje debe ser un enlace a su página de detalle.

### 👤 Character Detail
- Página dinámica usando rutas con parámetros.
- Mostrar información detallada del personaje seleccionado.
- Manejar estados de **cargando**, **error** y **datos listos**.

### 📍 Locations (opcional)
- Listado de localizaciones del universo Stranger Things.
- Componentizar cada localización en una card.

### 🚫 404
- Página NotFound para rutas inexistentes.

---

## 🔗 Rutas requeridas

Debe usarse **react-router-dom** para definir al menos:

- `/` → Home  
- `/characters` → Listado de personajes  
- `/characters/:id` → Detalle de personaje  
- `*` → 404  

---

## 🎯 Objetivo

Reforzar:

- React Router DOM (routes, params, links)
- Componentes y props
- useState
- useEffect + cleanup
- Fetching de datos desde API externa
- Custom hooks (por ejemplo `useCharacters`, `useCharacter`)
- Layout reutilizable (Header + Footer)
- Estilos con Tailwind CSS
- Testing básico (opcional)

---

## 🛠️ Tecnologías

- React + Vite
- JavaScript
- Tailwind CSS
- react-router-dom
- API pública de Stranger Things

---

## ⭐ Extras opcionales

- Buscador de personajes.
- Filtro por estado (vivo / muerto).
- Animaciones de transición entre páginas.
- Skeleton loaders.