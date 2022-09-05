import React from 'react';
import styles from './userlink.css';
import userimg from './userimg1.png'

export function UserLink() {
  return (
    <div className={styles.userlink} >
      <img src={userimg}
           alt="Avatar"
           className={styles.userlink__img} />
      <a href="#"
         className={styles.userlink__name} >Дмитрий Гришин</a >
    </div >
  );
}
