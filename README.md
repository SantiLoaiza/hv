# Santiago Loaiza — Portafolio / Portfolio

Portafolio personal de **Santiago Loaiza Santamaria**, desarrollador de software FullStack.
Sitio estático, responsive, bilingüe (ES / EN) y con modo claro/oscuro.

🔗 **Live:** _(pendiente de deploy en Vercel)_

## ✨ Características

- Diseño moderno, responsive y accesible
- Bilingüe español / inglés (toggle en el header, recuerda tu preferencia)
- Modo claro / oscuro (respeta el sistema y guarda la elección)
- Secciones: Inicio, Sobre mí, Skills, Experiencia (timeline), Educación e idiomas, Contacto
- Sin frameworks ni build: HTML, CSS y JavaScript vanilla

## 🛠️ Stack del sitio

HTML5 · CSS3 · JavaScript (vanilla) · Remix Icon · Google Fonts (Inter, Space Grotesk)

## 🚀 Desarrollo local

Es un sitio estático; basta con abrir index.html. Para servirlo:

    python3 -m http.server 8000
    # luego abre http://localhost:8000

## 📁 Estructura

    ├── index.html
    ├── assets/
    │   ├── css/styles.css
    │   ├── js/main.js
    │   ├── img/            # foto, favicon
    │   └── pdf/            # titulo y certificado
    └── README.md

## ✏️ Editar contenido

Todo el contenido (experiencia, skills, educación) vive como datos en assets/js/main.js
dentro de los objetos DATA e I18N, en español e inglés. Editar ahí actualiza ambos idiomas.
