import React from 'react';
import styles from './controls.css';
import {KarmaValue} from './KarmaValue';
import {CommentsButton} from './CommentsButton';
import {Actions} from './Actions';

interface IKarma {
  karma: number
}

export function Controls({karma}: IKarma) {
  return (
    <div className={styles.controls} >
      <KarmaValue karma={karma}/>
      <CommentsButton />
      <Actions />
    </div >
  );
}
