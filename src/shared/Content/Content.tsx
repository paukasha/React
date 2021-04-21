import React from 'react';
import styles from './content.scss';
import { CardsList } from '../CardsList';

export function Content(props: any) {
  return (
    <main className={styles.content}>
      {props.children}
    </main>
  );
}
