import React from 'react';
import styles from './userimg.scss';
import img1 from '../../../../../../src/img/userimg1.png';


export class UserImg extends React.Component {
  render() {
    return (
      <div>Hello
        <img src={ img1  }/>
      </div>

    );
  }
}
