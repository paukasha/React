import React from 'react';
import styles from './genericlist.scss';

interface IItem {
  // value: string;
  text: string;
  id: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' |'div';
  href?: string;
  // onClick: () => void;
}
const noop = () => {};
interface IMyListProps {
  list: IItem[];
  // onClick: (id: string) => void;
}
// export function MyList({list }: IMyListProps) {
//   return (
//     <ul>
//       {list.map((item) => (
//         // <li onClick={() => onClick(item.id)} key={item.id}>{item.value}</li>
//         // <li onClick={item.onClick} key={item.id}>{item.value}</li>
//         <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
//       ))}
//
//     </ul>
//   );
// }

        // const jsxs = [
        //   <li key={0}>Content One 0</li>,
        //   <li key={1}>Content One 1</li>,
        //   <li key={2}>Content One 2</li>,
        //   <li key={4}>Content One 4</li>,
        // ]

interface  IGenericListProps {
  list: IItem[];
}
export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({As = 'div',text, onClick=noop, className, id,  href}) => (
        <As
          className={className}
          onClick={() => {onClick(id)}}
          key={id}
          href={href}
        >
          {text}
        </As>
      ))}
    </>
  );
}