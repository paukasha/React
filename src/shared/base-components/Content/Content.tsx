import React from 'react';
import styles from './content.css';

export function Content(props: any) {
  return (
    <main className={styles.content} >
      {props.children}
    </main >
  );
}
