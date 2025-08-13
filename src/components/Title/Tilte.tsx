import React from 'react';
import { TitleProps } from './Tilte.types';
import styles from './Tilte.module.css';

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
};

export default Title;
