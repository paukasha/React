import React from 'react';
import styles from './textcontent.scss';
import { Title } from './Title';
import { UserImg } from './UserImg';

export function TextContent() {
  return (
    <div className={styles.textcontent}>
      <Title />
      <UserImg />
    </div>
  );
}
