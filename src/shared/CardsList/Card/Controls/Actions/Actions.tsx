import React from 'react';
import styles from './actions.scss';
import { ShareButton } from './ShareButton';
import { SaveButton } from './SaveButton';

export function Actions() {
  return (
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
  );
}
