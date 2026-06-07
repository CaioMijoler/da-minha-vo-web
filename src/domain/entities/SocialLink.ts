export interface SocialLink {
  platform: 'instagram' | 'facebook' | 'whatsapp';
  url: string;
  label: string;
}

export interface PhotoItem {
  id: string;
  url: string;
  alt: string;
}
