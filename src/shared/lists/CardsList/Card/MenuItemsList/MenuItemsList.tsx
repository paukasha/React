import React from 'react';
import styles from './menuitemslist.css';
import {EColor, Text} from "../../../../base-components/Text";
import {Icon} from "../../../../base-components/Icon";
import {EIcons} from "../../../../components/Icons/AllIcons";

interface IMenuItemsList {
  postId: string;
}

export function MenuItemsList({postId}: IMenuItemsList) {
  const {comment, share, block, save, warning} = EIcons;

  const itemListData = [
    {icon: comment, text: 'Комментарий'},
    {icon: share, text: 'Поделиться'},
    {icon: block, text: 'Скрыть'},
    {icon: save, text: 'Сохранить'},
    {icon: warning, text: 'Пожаловаться'},
  ]

  return (
    <ul className={styles.menuItemsList} >
      {itemListData.map(el => <>
        <li className={styles.menuItem}
            key={el.text}
            onClick={() => console.log(postId)} >
          <Icon name={el.icon} />
          <Text color={EColor.grey99} >{el.text}</Text >
        </li>
      </>)
      }
    </ul >
  );
}
