export const WHATSAPP_NUMBER =
  import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '573001234567';

const WHATSAPP_MESSAGE =
  'Hola, vi su página de Delivery Planner y me interesa saber más';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// TODO_VERIFICAR: Definir URL del video demo o reemplazar con enlace al producto
export const DEMO_URL =
  import.meta.env.PUBLIC_DEMO_URL ?? '#demo-pendiente';
