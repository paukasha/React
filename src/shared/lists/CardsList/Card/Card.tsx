import React from 'react';
import styles from './card.css';
import {TextContent} from './TextContent';
import {Preview} from './Preview';
import {Menu} from './Menu';
import {Controls} from '../../../components/Controls';

interface IPost  {
  post: any
}

export function Card({post}: IPost) {
  return (
    <li className={styles.card} >
      <TextContent author={post.data.author}
                   title={post.data.title}
                    created={post.data.created}
      />
      <Preview preview={post.data.thumbnail}/>
      <Menu />
      <Controls karma={post.data.score}/>
    </li>
  );
}
