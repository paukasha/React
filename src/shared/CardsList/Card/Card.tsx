import React from 'react';
import styles from './card.scss';
import { TextContent } from './TextContent';

export function Card() {
  return (
    <li className={styles.card}>
      <TextContent />
    </li>
  );
}
