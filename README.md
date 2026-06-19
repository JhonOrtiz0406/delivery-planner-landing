# Delivery Planner — Landing Page

Landing page de ventas para [Delivery Planner](https://delivery-planner.bystepsolutions.tech), SaaS B2B de gestión de entregas para pymes en Colombia.

**Stack:** Astro 5 + Tailwind CSS v4 · SSG estático · Sin frameworks JS pesados

---

## Desarrollo local

### Requisitos

- Node.js 20+
- npm 10+

### Configuración

```bash
# 1. Clonar y entrar al directorio
cd delivery-planner-landing

# 2. Copiar variables de entorno
cp .env.example .env

# 3. Editar .env con los valores reales
#    PUBLIC_WHATSAPP_NUMBER=57XXXXXXXXXX

# 4. Instalar dependencias
npm install

# 5. Levantar servidor de desarrollo
npm run dev
```

El servidor queda disponible en `http://localhost:4321`

### Build de producción

```bash
npm run build
npm run preview   # preview local del build estático
```

El output queda en `./dist/`.

---

## Imágenes pendientes de reemplazar

Todos los placeholders están marcados con comentarios `TODO` en el código.

### Logos

Copiar archivos a `public/logos/`:

| Archivo | Descripción |
|---------|-------------|
| `icon.png` | Ícono solo (sin texto). Usado en navbar. |
| `icon-with-text.png` | Ícono + texto "By Step Solutions". Usado en footer. |

### Screenshots del producto

Copiar archivos a `public/screenshots/`:

| Archivo | Vista |
|---------|-------|
| `login.png` | Pantalla de inicio de sesión |
| `calendar.png` | Vista de calendario de pedidos |
| `add-order.png` | Formulario de nuevo pedido |
| `employees.png` | Sección de gestión de empleados |
| `filter.png` | Sección de filtros y búsqueda |

Formato recomendado: PNG, 1280×720px (16:9). Optimizar antes de subir.

Después de agregar las imágenes, reemplazar los divs placeholder en cada componente con etiquetas `<img>` o el componente `<Image>` de `astro:assets`.

### Testimonio real

El componente `src/components/Testimonial.astro` tiene datos placeholder.
Buscar `REEMPLAZAR_CON_TESTIMONIO_REAL` y `TODO_VERIFICAR` en ese archivo.

---

## Variables de entorno

| Variable | Descripción | Default |
|----------|-------------|---------|
| `PUBLIC_WHATSAPP_NUMBER` | Número WhatsApp sin `+` ni espacios | `573001234567` |

Las variables `PUBLIC_*` de Astro se inyectan en build time (SSG). Para cambiarlas en producción, hacer un nuevo build.

---

## Deploy con Dokploy

### Requisitos

- Dokploy configurado con Traefik
- Certificado SSL via Let's Encrypt

### Variables de entorno en Dokploy

Desde el panel de Dokploy, configurar:

```
PUBLIC_WHATSAPP_NUMBER=57XXXXXXXXXX
```

### Build y deploy

```bash
# Build de imagen Docker
docker build \
  --build-arg PUBLIC_WHATSAPP_NUMBER=57XXXXXXXXXX \
  -t delivery-planner-landing .

# Verificar que funciona localmente
docker run -p 8080:80 delivery-planner-landing
# Abrir http://localhost:8080
```

Dokploy detecta el `docker-compose.yml` y maneja el deploy automáticamente.

El dominio configurado es: `www.delivery-planner.bystepsolutions.tech`

### Health check

Endpoint disponible en `/health` — devuelve `200 OK`.

---

## Estructura del proyecto

```
src/
  components/
    Navbar.astro        # Navbar sticky con CTA WhatsApp
    Hero.astro          # Hero con mockup del producto
    Problem.astro       # 3 puntos de dolor del cliente
    Solution.astro      # 3 features clave del producto
    Sectors.astro       # 4 sectores: joyería, lavandería, celulares, general
    Testimonial.astro   # Caso de éxito (placeholder — reemplazar)
    Pricing.astro       # Planes mensual y anual
    FAQ.astro           # 8 preguntas frecuentes
    CTAFinal.astro      # CTA grande con WhatsApp
    Footer.astro        # Footer mínimo
    WhatsAppFloat.astro # Botón flotante WhatsApp
  layouts/
    Layout.astro        # Layout base con meta tags y CSS
  lib/
    config.ts           # Config global: WhatsApp URL, demo URL
  pages/
    index.astro         # Página principal
  styles/
    global.css          # Tailwind v4 + Inter + tokens de color
public/
  logos/                # Logos PNG (agregar manualmente)
  screenshots/          # Screenshots del producto (agregar manualmente)
  favicon.svg
  robots.txt
```

---

## Pendientes (TODO_VERIFICAR)

- [ ] Reemplazar número WhatsApp real en `.env`
- [ ] Cambiar el video demo: editar `DEMO_VIDEO_URL` en `src/lib/config.ts` (forma `/embed/` de YouTube)
- [ ] Agregar logos PNG a `public/logos/`
- [ ] Agregar screenshots del producto a `public/screenshots/`
- [ ] Reemplazar testimonio placeholder en `Testimonial.astro`
- [ ] Confirmar límite de empleados por plan (mencionado en FAQ y Pricing)
- [ ] Confirmar métodos de pago aceptados (mencionado en FAQ)
- [ ] Confirmar email de contacto real en `Footer.astro`
- [ ] Crear página de Política de Privacidad y actualizar enlace en Footer
- [ ] Confirmar si plan anual tiene beneficio diferencial vs mensual (más allá de pago único)
- [ ] Agregar tracking (Google Analytics, Meta Pixel, etc.) cuando esté listo

---

Desarrollado por [By Step Solutions](https://bystepsolutions.tech)
