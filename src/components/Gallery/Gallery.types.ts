export interface GalleryProps {
  groups: GalleryGroup[];
}

export interface GalleryGroup {
  location: string;
  items: GalleryItem[];
}

export interface GalleryItem {
  id: string | number;
  src: string;
  alt: string;
}
