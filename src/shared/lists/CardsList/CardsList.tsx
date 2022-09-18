import React, {useContext} from 'react';
import styles from './cardslist.css';
import {Card} from './Card';
import {usePostsData} from "../../../hooks/usePostsData";
import {postsContext} from "../../context/postsContext";



export function CardsList() {
  const {posts} = useContext(postsContext);

  console.log('posts',posts)
  return (
    <ul className={styles.cardslist} >
      <Card />
    </ul >
  );
}
