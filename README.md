
# CXP - Plataforma de Criptomonedas


CXP es una pagina web diseñada para brindar acceso a información de la empresa. El proyecto sigue una arquitectura optimizada utilizando **Next.js 15**, **Tailwind CSS** y prácticas  para rendimiento y SEO.

## 🚀 **Getting Started**
### **1️⃣ Prerrequisitos**
Antes de comenzar, asegúrate de tener instalado:
- **Node.js** `>= 18.x.x`
- **npm** o **yarn**
- Un editor de código como **VS Code**

### **2️⃣ Clonar el Repositorio**
```bash
git clone https://github.com/camiloparrax8/vyrtiummedia
cd vyrtiummedia
```
### **2️⃣ Intalar Dependencias**
```bash
npm install
# o con yarn
yarn install
```

### **2️⃣ Configurar Variables de Entorno**
quitar el .example de los .env

### **5️⃣ Ejecutar el Servidor en Modo Desarrollo**
```bash
npm run dev
```
🔗 Luego, abre en el navegador:
👉 http://localhost:3000/


## 🚀 **Despliegue Continuo en Vercel**
Este repositorio utiliza **Vercel** para el despliegue automático.  
Cada vez que se hace un **merge de `develop` a `main`**, la versión en producción se actualiza automáticamente.

🔗 **Producción:** [https://vyrtiummedia.vercel.app/](https://vyrtiummedia.vercel.app/)  
🔗 **Ambiente de Desarrollo:** Se despliega en URLs temporales con cada commit en `develop`.


## 📂 **Estructura del Proyecto**


📦 src/

┃  📂 app/ #page.js Pagina principal (estructura de Next.js App Router) ┃ 

┣ 📂 api/cryptos # API Routes para datos dinámicos ┃ 

┃📂 layout/ # Componentes de estructura global (Header, Footer, etc) ┃ 

┃  📂 components/ # Componentes reutilizables ┃

┃  📂 public/ # Archivos estáticos (imágenes, íconos, fuentes) ┃ 

- **.env** Se usa para definir variables de entorno accesibles en el servidor y el backend de Next.js

-  **.env.local** Similar a .env, pero exclusivo del entorno local.

## 🛠️ **Tecnologías y Librerías Usadas**
- **Next.js 15** → Framework React optimizado para rendimiento y SEO.
- **React 19** → Última versión de React con mejoras en rendimiento.
- **Tailwind CSS** → Framework de estilos basado en utilidades para diseño rápido y flexible.
- **SWR** → Para Client-Side Fetching con revalidación automática.
- **React Spinners** → Librería ligera para loaders animados.
- **ESLint** → Para mantener un código limpio y estandarizado.
- **Vercel** → Despliegue rápido y escalable.

## ✅ **Buenas Prácticas Implementadas**
### **1️⃣ Separación entre Server y Client Components**
- Componentes estáticos (`Server Components`) para optimizar rendimiento.
- Componentes interactivos (`Client Components`) solo donde es necesario (`useState`, `useEffect`, `useSWR`).

### **2️⃣ Optimización de Imágenes (`next/image`)**
- Uso de `priority`, `sizes` y `fill` para mejorar carga.
- Reducción del peso de imágenes con `.WebP`.
### **3️⃣  Mejora en SEO y Performance**
- `metadata` en `layout.tsx` para título y descripción dinámicos.
- `next/head` para metaetiquetas y mejor indexación.
### **4️⃣  Carga de Datos con SWR**
- `CryptoTicker.tsx` usa `useSWR` para obtener datos de `/api/cryptos`.
- Actualización automática cada 5 minutos (`refreshInterval: 300000`)

## Page Speed Insigths
- https://pagespeed.web.dev/analysis/https-vyrtiummedia-vercel-app/k8g8jc7g1r?form_factor=desktop 

## Authors

- [@camiloparrax8](https://github.com/camiloparrax8)