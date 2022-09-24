import React from 'react';
import styles from './metadata.css';
import {UserLink} from './UserLink';
import {CreatedAt} from './CreatedAt';

interface IAuthorData {
  author: string
  created: number
}
export function MetaData({author, created}: IAuthorData) {
  return (
    <div className={styles.metadata} >
      <UserLink author={author}/>
      <CreatedAt created={created}/>
    </div >

  );
}
