import React from 'react';
import styles from './preview.css';
import preview from './preview1.png'

export function Preview() {
  return (
    <div className={styles.preview} >
      <img src={preview}
           alt="preview"
           className={styles.previewImg} />
    </div >
  );
}
