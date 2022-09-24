import React, {useEffect, useState} from 'react';
import styles from './createdat.css';
import  moment from 'moment'

interface ICreated {
  created: number
}

export function CreatedAt({created}: ICreated) {
  moment.locale('ru-Ru')

  let normCreatedDate = moment.unix(created).utc().format()
  let createdAgo = moment.duration(normCreatedDate, "minutes").humanize()

  return (
    <span className={styles.createdAt} >
        <span className={styles.publishedLabel} >опубликовано </span >
      {createdAgo} назад
      </span >
  );
}
