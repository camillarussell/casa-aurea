import React, { useState } from 'react';

import GalleryModal from '../GalleryModal';
import Title from '../Title';
import { GalleryProps } from './Gallery.types';
import styles from './Gallery.module.css';

const Gallery: React.FC<GalleryProps> = ({ groups }) => {
  const allItems = groups.flatMap((group) => group.items);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <Title>Galeria de Fotos</Title>

      <div className={styles.photosWrapper}>
        {allItems.map((item, index) => (
          <div
            key={item.id}
            className={styles.item}
            onClick={() => setSelectedIndex(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedIndex(index)}
          >
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <GalleryModal
          items={allItems}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </div>
  );
};

export default Gallery;
