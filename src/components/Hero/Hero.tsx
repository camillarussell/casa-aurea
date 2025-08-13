import React from 'react';
import { HeroProps } from './Hero.types';
import styles from './Hero.module.css';

import hero800Webp from '../../assets/hero-800.webp';
import hero1536Webp from '../../assets/hero-1536.webp';
import hero800Jpg from '../../assets/hero-800.jpg';
import hero1536Jpg from '../../assets/hero-1536.jpg';

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className={styles.wrapper}>
      <picture className={styles.picture}>
        <source
          type="image/webp"
          srcSet={`${hero800Webp} 800w, ${hero1536Webp} 1200w`}
          sizes="(max-width: 640px) 100vw, 1200px"
        />
        <source
          type="image/jpeg"
          srcSet={`${hero800Jpg} 800w, ${hero1536Jpg} 1200w`}
          sizes="(max-width: 640px) 100vw, 1200px"
        />
        <img
          className={styles.image}
          src={hero1536Jpg}
          alt="Vista aérea da Casa Áurea em Tamandaré com praia ao fundo"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </picture>

      <div className={styles.content}>
        {title && (
          <h1 className={styles.title} data-text={title}>
            {title}
          </h1>
        )}
        {subtitle && <p className={styles.subtilte}>{subtitle}</p>}
      </div>
    </section>
  );
};

export default Hero;
