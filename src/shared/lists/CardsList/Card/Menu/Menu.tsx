import React from 'react';
import styles from './menu.css';
import {MenuIcon} from '../../../../components/Icons';
import {Dropdown} from '../../../../components/Dropdown';
import {MenuItemsList} from '../MenuItemsList';
import {Text, EColor} from '../../../../base-components/Text'


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
            <Text mobileSize={12}
                  size={14}
                  color={EColor.grey66}>Закрыть</Text>
          </button >
        </div >
      </Dropdown >

    </div >
  );
}
