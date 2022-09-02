import React from 'react';
import styles from './textcontent.scss';
import { Title } from './Title';
import { UserLink } from './MetaData/UserLink';
import { CreatedAt } from './MetaData/CreatedAt';
import { MetaData } from './MetaData';

export function TextContent() {
  return (
    <div className={styles.textContent}>

        <MetaData />
        <Title />

      </div>



  );
}
