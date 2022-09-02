import React from 'react';
import styles from './preview.scss';
import preview1 from '../../../../img/preview1.png';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img src={ preview1 } alt="preview" className={styles.previewImg} />
    </div>

  );
}
