import React from 'react';
import styles from './userlink.css';
import userimg from './userimg1.png'

interface IAuthor  {
  author: string
}
export function UserLink({author}: IAuthor) {
  let authorLink = 'https://www.reddit.com/user/' + author
  return (
    <div className={styles.userlink} >
      <img src={userimg}
           alt="Avatar"
           className={styles.userlink__img} />
      <a href={authorLink}
         target='_blank'
         className={styles.userlink__name} >{author}</a >
    </div >
  );
}
