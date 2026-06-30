export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface PromoModalProps extends ModalProps {
  onOpenCarousel: () => void;
}

export interface GalleryImage {
  src: string;
  label: string;
  visible: boolean;
  type: string;
}
