export interface GalleryItem {
  id: string | number;
  src: string;
  alt: string;
}

export interface GalleryModalProps {
  items: GalleryItem[];
  initialIndex: number;
  onClose: () => void;
}
