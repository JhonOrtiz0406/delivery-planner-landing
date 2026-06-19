export const WHATSAPP_NUMBER =
  import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '573001234567';

const WHATSAPP_MESSAGE =
  'Hola, vi su página de Delivery Planner y me interesa saber más';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const DEMO_URL =
  import.meta.env.PUBLIC_DEMO_URL ?? 'https://delivery-planner.bystepsolutions.tech';
