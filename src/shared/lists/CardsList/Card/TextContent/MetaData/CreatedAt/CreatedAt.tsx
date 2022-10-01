import React, {useEffect, useState} from 'react';
import styles from './createdat.css';
import  moment from 'moment'

interface ICreated {
  created: number
}

export function CreatedAt({created}: ICreated) {
  moment.locale('ru-Ru')
  let normCreatedDate = moment.unix(created).utc().format()
  let diff = moment(new Date()).diff(normCreatedDate, 'minutes')
  let createdAgo = moment.duration(diff, "minutes").humanize()

  return (
    <span className={styles.createdAt} >
        <span className={styles.publishedLabel} >опубликовано </span >
      {createdAgo} назад
      </span >
  );
}
