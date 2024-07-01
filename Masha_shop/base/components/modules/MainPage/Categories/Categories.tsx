import React from 'react';
import Image from 'next/image';
import dress1 from '@/public/img/categories-img/dress1.png';
import dress2 from '@/public/img/categories-img/dress2.png';
import blouse1 from '@/public/img/categories-img/blouse1.png';
import blouse2 from '@/public/img/categories-img/blouse2.png';
import set1 from '@/public/img/categories-img/set1.png';
import set2 from '@/public/img/categories-img/set2.png';
import styles from '@/styles/main-page/index.module.scss';

const CategorySection: React.FC = () => {
  return (
    <section className={styles['category-section']}>
      <h2 className={styles['category-title']}>Resumen de Categorías</h2>

      {/* Vestidos */}
      <div className={styles['category-row']}>
        <div className={styles['category-item']}>
          <Image src={dress1} alt="Vestido 1" className={styles['category-image']} />
          <div className={styles['category-info']}>
            <h3 className={styles['category-name']}>Vestido 1</h3>
            <p className={styles['category-description']}>Descripción corta del vestido 1</p>
            <p className={styles['category-price']}>$99.99</p>
          </div>
        </div>
        <div className={styles['category-item']}>
          <Image src={dress2} alt="Vestido 2" className={styles['category-image']} />
          <div className={styles['category-info']}>
            <h3 className={styles['category-name']}>Vestido 2</h3>
            <p className={styles['category-description']}>Descripción corta del vestido 2</p>
            <p className={styles['category-price']}>$129.99</p>
          </div>
        </div>
      </div>

      {/* Blusas */}
      <div className={styles['category-row']}>
        <div className={styles['category-item']}>
          <Image src={blouse1} alt="Blusa 1" className={styles['category-image']} />
          <div className={styles['category-info']}>
            <h3 className={styles['category-name']}>Blusa 1</h3>
            <p className={styles['category-description']}>Descripción corta de la blusa 1</p>
            <p className={styles['category-price']}>$59.99</p>
          </div>
        </div>
        <div className={styles['category-item']}>
          <Image src={blouse2} alt="Blusa 2" className={styles['category-image']} />
          <div className={styles['category-info']}>
            <h3 className={styles['category-name']}>Blusa 2</h3>
            <p className={styles['category-description']}>Descripción corta de la blusa 2</p>
            <p className={styles['category-price']}>$69.99</p>
          </div>
        </div>
      </div>

      {/* Conjuntos */}
      <div className={styles['category-row']}>
        <div className={styles['category-item']}>
          <Image src={set1} alt="Conjunto 1" className={styles['category-image']} />
          <div className={styles['category-info']}>
            <h3 className={styles['category-name']}>Conjunto 1</h3>
            <p className={styles['category-description']}>Descripción corta del conjunto 1</p>
            <p className={styles['category-price']}>$99.99</p>
          </div>
        </div>
        <div className={styles['category-item']}>
          <Image src={set2} alt="Conjunto 2" className={styles['category-image']} />
          <div className={styles['category-info']}>
            <h3 className={styles['category-name']}>Conjunto 2</h3>
            <p className={styles['category-description']}>Descripción corta del conjunto 2</p>
            <p className={styles['category-price']}>$119.99</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

