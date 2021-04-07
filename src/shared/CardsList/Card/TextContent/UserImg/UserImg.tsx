import React from 'react';
import styles from './userimg.scss';

import myImg from './userimg1.png';
const img1 = require('./userimg1.png');

export function UserImg() {
  return (
      <img src={ myImg} alt="ava"/>
  );
}
