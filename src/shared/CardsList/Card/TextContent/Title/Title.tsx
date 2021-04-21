import React from 'react';
import styles from './title.scss';

export function Title() {
  return (
    <h2 className={styles.title}>
      <a href="#user-post">
        Реализация намеченных плановых заданий Lorem ipsum dolor sit amet.
      </a></h2>
  );
}
// @bem-react/core