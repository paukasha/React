import React from 'react';
import styles from './menuitemslist.css';
import {BlockIcon, WarningIcon} from '../../../../components/Icons';

interface IMenuItemsList {
  postId: string;
}

export function MenuItemsList({postId}: IMenuItemsList) {
  return (
    <ul className={styles.menuItemsList} >
      <li className={styles.menuItem}
          onClick={() => console.log(postId)} >
        <BlockIcon />
      </li >

      <div className={styles.divider} />

      <li className={styles.menuItem} >
        <WarningIcon />
      </li >
    </ul >
  );
}
