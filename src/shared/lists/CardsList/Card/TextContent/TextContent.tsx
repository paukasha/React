import React from 'react';
import styles from './textcontent.css';
import {Title} from './Title';
import {MetaData} from './MetaData';


interface IPostContent {
  author: string
  title: string
  created: number
}


export function TextContent({author, title, created}: IPostContent) {
  return (
    <div className={styles.textContent} >
      <MetaData author={author}
                created={created}
      />
      <Title title={title} />
    </div >
  );
}
