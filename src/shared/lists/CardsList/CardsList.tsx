import React, {useContext} from 'react';
import styles from './cardslist.css';
import {Card} from './Card';
import {usePostsData} from "../../../hooks/usePostsData";
import {postsContext} from "../../context/postsContext";

export function CardsList() {
  const [posts] = usePostsData()

  console.log('posts',posts)
  return (
    <ul className={styles.cardslist} >
      {posts.length && posts.map((el:any) => (
           <Card post={el} key={el.data.id}/>
        ))}

    </ul >
  );
}
