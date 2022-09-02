import React from 'react';
import styles from './controls.scss';
import { KarmaValue } from './KarmaValue';
import { CommentsButton } from './CommentsButton';
import { Actions } from './Actions';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaValue />
      <CommentsButton />
      <Actions />
    </div>
  );
}
