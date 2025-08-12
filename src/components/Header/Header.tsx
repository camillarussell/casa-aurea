import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const HEADER_HEIGHT = 96;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > HEADER_HEIGHT);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header data-testid="header" className={isScrolled ? styles.scrolled : ''}>
      <nav className={styles.navigation}>
        <div className={styles.logo}>Casa Áurea</div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link to="/">Início</Link>
          </li>
          <li className={styles.listItem}>
            <a href="/galeria">Galeria</a>
          </li>
          <li className={styles.listItem}>
            <Link to="/regras">Regras</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
