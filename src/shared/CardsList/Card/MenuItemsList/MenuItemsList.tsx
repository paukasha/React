import React from 'react';
import styles from './menuitemslist.scss';
import { BlockIcon, WarningIcon } from '../../../Icons';
import {  Text } from '../../../Text';

interface IMenuItemsList {
  postId: string;
}

export function MenuItemsList({postId}: IMenuItemsList) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <BlockIcon />
        {/*<Text size={12}  >Скрыть</Text>*/}
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <WarningIcon />
        {/*<Text size={12} >Пожаловаться</Text>*/}
      </li>
    </ul>
  );
}
//color={EColors.grey99}