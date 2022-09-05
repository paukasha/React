import React from 'react';
import styles from './menu.css';
import {MenuIcon} from '../../../../components/Icons';
import {Dropdown} from '../../../../components/Dropdown';
import {MenuItemsList} from '../MenuItemsList';

export function Menu() {
  return (
    <div className={styles.menu} >
      <Dropdown
        button={
          <button className={styles.menuButton} >
            <MenuIcon />
          </button >
        }
      >
        <div className={styles.dropdown} >
          <MenuItemsList postId="1234" />
          <button className={styles.closeButton} >
          </button >
        </div >
      </Dropdown >

    </div >
  );
}
