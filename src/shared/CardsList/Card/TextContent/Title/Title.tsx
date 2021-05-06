import React, { useState } from 'react';
import styles from './title.scss';
import { Post } from '../../../../Post';

export function Title() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <h2 className={styles.title}>
      <a href="#user-post" onClick={() => {setIsModalOpened(true)}}>
        Реализация намеченных плановых заданий Lorem ipsum dolor sit amet.
      </a>

      {isModalOpened && (
        <Post
          onClose={() => { setIsModalOpened(false)}}
        />
      )}
    </h2>
  );
}
// @bem-react/core