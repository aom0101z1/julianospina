# PROJECT SUMMARY — julianospina.com.co

**Última actualización:** 2026-03-17

---

## Descripción general

Sitio web profesional / portafolio de **Julián Andrés Ospina Posada**: abogado, especialista en Derecho Administrativo, ex-concejal de Pereira (6.5 años), presidente del Concejo 2015, precandidato a la Gobernación de Risaralda (2019), miembro del Centro Democrático.

El sitio es elegante, moderno, responsive, con blog estático. Light mode.

- **Dominio:** julianospina.com.co
- **Hosting:** GitHub Pages
- **Repo:** https://github.com/aom0101z1/julianospina
- **Directorio local:** `C:\Dev\julianospina\`
- **CNAME:** `julianospina.com.co`

---

## Estructura de archivos

```
C:\Dev\julianospina\
│
├── index.html                  ← Homepage con foto portrait, bio y blog reciente
│
├── registro/
│   └── index.html              ← Sistema de registro de eventos (URL: /registro)
├── admin/
│   └── index.html              ← Panel admin de registros (URL: /admin)
├── evento.html                 ← Página de evento con redirect
│
├── pages/
│   ├── trayectoria.html        ← Biografía + timeline + valores
│   ├── logros.html             ← 12 logros con filtros por categoría
│   ├── opinion.html            ← Blog listing (carga posts.json)
│   └── contacto.html           ← Formulario + WhatsApp + redes
│
├── blog/
│   ├── posts.json              ← Índice de posts (metadata)
│   ├── template.html           ← Plantilla de referencia para nuevos posts
│   └── 2026-03-04-futuro-risaralda.html  ← Post ejemplo
│
├── assets/
│   ├── css/
│   │   ├── main.css            ← Design system + estilos globales
│   │   └── blog.css            ← Estilos específicos del blog
│   ├── img/
│   │   └── julian-ospina-portrait.jpeg  ← Foto profesional de Julián
│   └── js/
│       ├── main.js             ← Nav sticky, menú mobile, scroll animations, filtros
│       ├── blog.js             ← Carga posts.json, renderiza cards en opinion.html
│       └── newsletter.js       ← Formulario de suscripción (FormSubmit.co)
│
├── sitemap.xml
├── robots.txt
├── 404.html
├── CNAME
│
├── artista-lider.html          ← Landing page Durguez (preexistente)
├── cultura-risaralda.html      ← Landing page Durguez (preexistente)
├── lider-humano.html           ← Landing page Durguez (preexistente)
└── *.webp / *.jpg / *.jpeg     ← Imágenes de landing pages (preexistentes)
```

---

## Design system

| Propiedad         | Valor                                              |
|-------------------|-----------------------------------------------------|
| Primary color     | `#1B2A4A` (navy oscuro)                            |
| Accent color      | `#C9A227` (dorado)                                 |
| Background        | `#F8F9FA` (gris claro) + `#FFFFFF` (blanco)        |
| Text              | `#1A1A2E` (oscuro) + `#4A5568` (secundario)        |
| Font display      | Playfair Display (serif, elegante)                  |
| Font headings     | Poppins (sans-serif, moderno)                       |
| Font body         | Inter (sans-serif, legible)                         |
| Mode              | Light mode                                          |
| Breakpoints       | 640px, 768px, 1024px, 1280px (mobile-first)        |

Todo definido en CSS custom properties en `assets/css/main.css`.

---

## Navegación

Todas las páginas comparten el mismo nav:
- **Desktop:** nav horizontal sticky con links
- **Mobile:** hamburger menu con panel lateral

Enlaces usan **rutas relativas** (no absolutas) para funcionar tanto en file:// como en servidor.

---

## Sistema de blog (sin CMS)

1. Los posts son archivos `.html` estáticos en `blog/`
2. `blog/posts.json` tiene la metadata de cada post
3. `assets/js/blog.js` carga el JSON y renderiza las cards en `pages/opinion.html`
4. La homepage también carga los 3 posts más recientes (inline JS)

### Agregar un nuevo post:

1. Copiar `blog/template.html` → `blog/YYYY-MM-DD-slug.html`
2. Reemplazar los campos marcados con `[CAMPO]`
3. Escribir el contenido del artículo en `article__body`
4. Agregar entrada en `blog/posts.json`:
```json
{
    "id": "slug",
    "title": "Título del artículo",
    "date": "YYYY-MM-DD",
    "category": "Desarrollo Regional | Política Pública | Opinión",
    "excerpt": "Resumen de ~150 caracteres",
    "url": "blog/YYYY-MM-DD-slug.html",
    "readTime": "X min",
    "author": "Julián Ospina Posada"
}
```
5. Agregar URL al `sitemap.xml`

---

## Formularios y newsletter

### Newsletter ("Mantente informado")

Usa **FormSubmit.co** — servicio gratuito, sin backend propio.

| Propiedad        | Valor                                              |
|------------------|-----------------------------------------------------|
| Servicio         | FormSubmit.co                                       |
| Email actual     | `admin@ciudadbilingue.com` (testing)                |
| Ubicación        | `index.html` → sección "Mantente informado"         |
| Cómo funciona    | Visitante ingresa email → FormSubmit envía a inbox  |

**Activación:** La primera vez que alguien envía el formulario, FormSubmit envía un email de confirmación a la dirección configurada. Hay que hacer clic en el enlace para activar.

**Para cambiar el email destino:** Editar el `action` del formulario en `index.html`:
```html
<form action="https://formsubmit.co/NUEVO_EMAIL_AQUI" method="POST">
```

### Contacto

| Formulario   | Ubicación              | Estado                                          |
|--------------|------------------------|-------------------------------------------------|
| Contacto     | contacto.html          | PENDIENTE — necesita configurar email destino   |

---

## Redes sociales y contacto

| Red            | URL / Dato                                       |
|----------------|--------------------------------------------------|
| Facebook       | https://www.facebook.com/julianospinaposada       |
| Instagram      | https://www.instagram.com/julianospinaposada      |
| X (Twitter)    | https://x.com/julianospinapos                     |
| WhatsApp       | 573116044573                                      |

Configurados en el footer de todas las páginas y en `pages/contacto.html`.

---

## Foto profesional

La foto de Julián Ospina está en `assets/img/julian-ospina-portrait.jpeg` y aparece en:

- **Hero de index.html** — Circular (340px), borde dorado, visible solo en desktop (900px+)
- **Sección "Sobre Julián" de index.html** — Formato 3:4 con bordes redondeados
- **Perfil en trayectoria.html** — Mismo formato 3:4

---

## Sistema de registro preexistente

El dominio tenía un sistema de registro de eventos que sigue funcionando:

| Ruta              | Descripción                                     |
|-------------------|-------------------------------------------------|
| `/registro`       | Formulario de registro (Firebase/Firestore)     |
| `/admin`          | Panel de administración con Firebase Auth        |
| `evento.html`     | Página de evento con banner e imágenes           |

Firebase project: `durguez-registro`. Los datos (2000+ registros con teléfonos) están en Firestore, NO en los archivos HTML. Las reglas están en el repo `durguez` (`firestore.rules`).

---

## Landing pages preexistentes (Durguez)

Estas páginas son landing pages de campaña con estilo dark mode, independientes del sitio principal:

- `artista-lider.html` — Landing "El Artista que se volvió Líder"
- `cultura-risaralda.html` — Landing sobre cultura en Risaralda
- `lider-humano.html` — Landing "Un Líder con Humanidad"

Usan sus propios estilos inline. No comparten el design system del sitio profesional.

---

## Deploy

```bash
cd /c/Dev/julianospina
git add .
git commit -m "descripción del cambio"
git push origin main
```

GitHub Pages sirve desde la rama `main`. El CNAME apunta a `julianospina.com.co`. Los cambios tardan ~1-2 minutos en reflejarse.

---

## Cosas pendientes / por configurar

- [ ] **Newsletter — activar:** Enviar un test desde el formulario y confirmar el email de activación en admin@ciudadbilingue.com
- [ ] **Newsletter — email definitivo:** Cambiar `admin@ciudadbilingue.com` por el email de Julián cuando esté listo
- [ ] **Contacto:** Configurar el formulario de contacto en `contacto.html` con email destino
- [ ] **Favicon:** Agregar `<link rel="icon">` con el logo/favicon

---

## Convenciones

- **Tildes correctas** en todo el español (política, más, gestión, etc.)
- **Commits** en inglés, descriptivos
- **Rutas relativas** en todos los enlaces HTML (no usar `/` absoluto)
- **Animaciones:** `fade-in`, `fade-in-left`, `fade-in-right`, `stagger` — activadas por Intersection Observer en `main.js`
