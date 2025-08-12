import React from 'react';
import Rules from '../../components/Rules';
import styles from './RulesPage.module.css';

const RulesPage: React.FC = () => {
  return (
    <main className={styles.rules}>
      <div className={styles.maxContainer}>
        <Rules />
      </div>
    </main>
  );
};

export default RulesPage;
