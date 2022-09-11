import React from 'react';
import styles from './menuitemslist.css';
import {EColor, Text} from "../../../../base-components/Text";
import {Icon} from "../../../../base-components/Icon";
import {EIcons} from "../../../../components/Icons/AllIcons";

interface IMenuItemsList {
  postId: string;
}

export function MenuItemsList({postId}: IMenuItemsList) {

  const itemListData = [
    {id: 1, icon: EIcons.comment, text: 'Комментарий'},
    {id: 2, icon: EIcons.share, text: 'Поделиться'},
    {id: 3, icon: EIcons.block, text: 'Скрыть'},
    {id: 4, icon: EIcons.save, text: 'Сохранить'},
    {id: 5, icon: EIcons.warning, text: 'Пожаловаться'},
  ]

  return (
    <ul className={styles.menuItemsList} >
      {itemListData.map((el,idx) => <li className={styles.menuItem}
            key={idx}
            onClick={() => console.log(postId)} >
          <Icon name={el.icon} iconClass='icon18' />
          <Text color={EColor.grey99} >{el.text}</Text >
        </li>
     )}
    </ul>
  );
}
