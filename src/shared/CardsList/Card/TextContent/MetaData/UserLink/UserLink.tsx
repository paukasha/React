import React from 'react';
import styles from './userlink.scss';
import img1 from '../../../../../../img/userimg1.png';

export function UserLink() {
  return (
      <div className={styles.userlink}>
        <img src={ img1 }
             alt="Avatar"
             className={styles.userlink__img}/>
        <a href="#user-url" className={styles.userlink__name}>Дмитрий Гришин</a>
      </div>
  );
}
