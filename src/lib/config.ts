export const WHATSAPP_NUMBER =
  import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '573001234567';

const WHATSAPP_MESSAGE =
  'Hola, vi su página de Delivery Planner y me interesa saber más';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Video demo (YouTube) que abre el modal del hero. Forma /embed/ para iframe.
export const DEMO_VIDEO_URL =
  import.meta.env.PUBLIC_DEMO_VIDEO_URL ??
  'https://www.youtube.com/embed/tQPbEFf3Fic?rel=0&modestbranding=1&autoplay=1';
