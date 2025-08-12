import React from 'react';
import { galleryImages } from '../../mocks/galleryImages';

import styles from './GalleryPage.module.css';
import Gallery from '../../components/Gallery';

const GalleryPage: React.FC = () => {
  return (
    <main className={styles.gallery}>
      <div className={styles.maxContainer}>
        <Gallery groups={galleryImages} />
      </div>
    </main>
  );
};

export default GalleryPage;
