import React from 'react';
import styles from './menu.scss';
import { MenuIcon } from '../../../Icons';
import { Dropdown } from '../../../Dropdown';
import { Text } from '../../../Text';
import { MenuItemsList } from '../MenuItemsList';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />

          </button>
        }
      >
       <div className={styles.dropdown}>
         <MenuItemsList postId="1234"/>
         <button className={styles.closeButton}>
           {/*<Text mobileSize={12} size={14} >*/}
           {/*  Закрыть*/}
           {/*</Text>*/}
         </button>
       </div>
      </Dropdown>

    </div>
  );
}
//color={EColors.grey66}