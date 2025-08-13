import React from 'react';
import styles from './Home.module.css';

import Hero from '../../components/Hero';

const Home: React.FC = () => {
  return (
    <main className={styles.home}>
      <Hero title="Casa Áurea" cta="Descubra mais" />
    </main>
  );
};

export default Home;
