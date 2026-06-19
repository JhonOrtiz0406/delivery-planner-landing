# ── Stage 1: Build ──────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependencias primero (cache de Docker)
COPY package*.json ./
RUN npm ci --prefer-offline

# Variables de entorno disponibles en build time (SSG)
ARG PUBLIC_WHATSAPP_NUMBER=573001234567
ENV PUBLIC_WHATSAPP_NUMBER=$PUBLIC_WHATSAPP_NUMBER

# Copiar código y construir
COPY . .
RUN npm run build

# ── Stage 2: Serve ───────────────────────────────────────────────────────────
FROM nginx:alpine AS runner

# Configuración nginx personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Artefacto del build de Astro
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD wget -qO- http://127.0.0.1/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
