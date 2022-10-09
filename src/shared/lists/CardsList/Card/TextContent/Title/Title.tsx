import React, {useState} from 'react';
import styles from './title.css';
import {Post} from '../../../../../components/Post';

interface ITitle {
  title: string
}

export function Title({title}: ITitle) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <h2 className={styles.title} >
      <a className={styles.title__link}
         onClick={() => {
           setIsModalOpened(true)
         }} >
        {title}
      </a >

      {isModalOpened && (
        <Post
          onClose={() => {
            setIsModalOpened(false)
          }}
        />
      )}
    </h2 >
  );
}

// @bem-react/core
