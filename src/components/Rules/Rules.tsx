import React from 'react';

import { rulesData } from './Rules.data';
import Title from '../Title';
import styles from './Rules.module.css';

const Rules: React.FC = () => {
  return (
    <div className={styles.container}>
      <Title>Regras da casa</Title>

      {rulesData.map(({ title, content }) => (
        <section key={title} className={styles.section}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {Array.isArray(content) ? (
            <ul className={styles.list}>
              {content.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.paragraph}>{content}</p>
          )}
        </section>
      ))}
    </div>
  );
};

export default Rules;
