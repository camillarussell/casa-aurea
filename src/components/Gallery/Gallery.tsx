import React from 'react';
import styles from './Gallery.module.css';
import { GalleryProps } from './Gallery.types';

const Gallery: React.FC<GalleryProps> = ({ groups }) => {
  const allItems = groups.flatMap((group) => group.items);

  return (
    <div className={styles.container}>
      {allItems.map((item) => (
        <div key={item.id} className={styles.item}>
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
