import React from 'react';
import styles from './GalleryModal.module.css';
import { GalleryModalProps } from './GalleryModal.types';
import { useGalleryModalLogic } from './GalleryModal.logic';

const GalleryModal: React.FC<GalleryModalProps> = ({
  items,
  initialIndex,
  onClose,
}) => {
  const { currentItem, goNext, goPrev } = useGalleryModalLogic(
    items,
    initialIndex,
    onClose
  );

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Visualização da imagem"
    >
      <button
        className={styles.closeButton}
        aria-label="Fechar galeria"
        onClick={onClose}
      >
        ✕
      </button>

      <div className={styles.content}>
        <button
          className={`${styles.navButton} ${styles.navButtonLeft}`}
          aria-label="Imagem anterior"
          onClick={goPrev}
        >
          ←
        </button>

        <img
          src={currentItem.src}
          alt={currentItem.alt}
          className={styles.image}
        />

        <button
          className={`${styles.navButton} ${styles.navButtonRight}`}
          aria-label="Próxima imagem"
          onClick={goNext}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;
