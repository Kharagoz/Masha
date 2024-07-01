import React from 'react';
import styles from '@/styles/main-page/index.module.scss';

const HeroContext = () => {
  return (
    <section className={styles.HeroContext}>
      <div className={styles.HeroContext__container}>
        <img src="/img/hero-concept.png" alt="Hero Concept" className={styles.HeroContext__image} />
      </div>
    </section>
  );
};

export default HeroContext;
