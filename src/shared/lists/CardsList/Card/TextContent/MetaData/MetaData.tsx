import React from 'react';
import styles from './metadata.css';
import {UserLink} from './UserLink';
import {CreatedAt} from './CreatedAt';

export function MetaData() {
  return (
    <div className={styles.metadata} >
      <UserLink />
      <CreatedAt />
    </div >

  );
}