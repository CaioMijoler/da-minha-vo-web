import { SocialLink, PhotoItem } from '@/domain/entities/SocialLink';

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'instagram', url: 'https://instagram.com', label: 'Siga no Instagram' },
  { platform: 'facebook', url: 'https://facebook.com', label: 'Curta no Facebook' },
  { platform: 'whatsapp', url: 'https://wa.me', label: 'Chame no WhatsApp' }
];

export const PHOTOS: PhotoItem[] = [
  { id: '1', url: 'https://picsum.photos/300/300?random=1', alt: 'Foto de Trabalho 1' },
  { id: '2', url: 'https://picsum.photos/300/300?random=2', alt: 'Foto de Trabalho 2' },
  { id: '3', url: 'https://picsum.photos/300/300?random=3', alt: 'Foto de Trabalho 3' }
];
