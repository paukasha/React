import React from 'react';
import styles from './genericlist.scss';

interface IItem {
  value: string;
  id: string;
  // onClick: (id: string) => void;
}
interface IMyListProps {
  list: IItem[];
  // onСlick: (id: string) => void;
}
export function MyList({list }: IMyListProps) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={item.id}>{item.value}</li>
      ))}

    </ul>
  );
}

        // const jsxs = [
        //   <li key={0}>Content One 0</li>,
        //   <li key={1}>Content One 1</li>,
        //   <li key={2}>Content One 2</li>,
        //   <li key={4}>Content One 4</li>,
        // ]
