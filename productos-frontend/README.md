# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# CRUD de Productos con React y Spring Boot

Este proyecto es un CRUD básico de productos usando **React** en el frontend y **Spring Boot** en el backend. Actualmente el frontend está hardcodeado, luego se conectará al REST API del backend.

---

## Instalación y ejecución del frontend (React)

1. **Instalar Node.js**  
   Asegúrate de tener Node.js y npm instalados. Puedes descargarlo desde:  
   [https://nodejs.org/](https://nodejs.org/)

```bash
node -v
npm -v
```

2. **Crear el proyecto React**  
```bash
npm create vite@latest productos-frontend -- --template react
```

3. **Entrar al directorio del proyecto**
```bash
cd productos-frontend
```

4. **Instalar dependencias**
```bash
npm install
```

5. **Ejecutar el proyecto en servidor local**
```bash
npm run dev
```