import React from 'react';
import styles from './content.scss';
import { CardsList } from '../CardsList';

export function Content() {
  return (
    <main className={styles.content}>
      <CardsList/>
    </main>
  );
}
