import React, {useEffect, useState} from 'react';
import styles from './preview.css';

import image1 from './preview1.png'

interface IPreview {
  [key: string]: any,
}

export function Preview({preview}: IPreview) {

  let image = preview === 'self' ?  image1 : preview

  return (
    <div className={styles.preview} >
      <img src={image}
           alt="preview"
           className={styles.previewImg} />
    </div >
  );
}
