import React from 'react';
import styles from './dropdown.scss';
import set = Reflect.set;

interface IDropdownProps {
  button: React.ReactNode;
  // это то что будет выпадать из списка
  children: React.ReactNode;
  isOpen?: boolean;
  // колбэки
  onOpen?: () => void;
  onClose?: () => void;

}
const NOOP = () => {};
export function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen)

  React.useEffect(() => {
    setIsDropdownOpen(isOpen)
  }, [isOpen])

  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(),[isDropdownOpen])


  const handleOpen = () => {

    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }
  return (
  <div className={styles.container}>
  <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
    { button }
  </div>
    {isDropdownOpen && (
      <div className={styles.listContainer}>
        <div className={styles.list}
          onClick={() => setIsDropdownOpen(false)}>
          {children}
        </div>
      </div>
    )}
  </div>
  );
}

// const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
// React.useEffect(() => setIsDropdownOpen(isOpen),[isOpen]);
// React.useEffect(() => isDropdownOpen ? onOpen(): onClose(), [ isDropdownOpen])
// const handleOpen = () => {
//   if (isOpen === undefined) {
//     setIsDropdownOpen(!isDropdownOpen)
//   }
// }

// <div className={styles.container}>
//   <div onClick={handleOpen}>
//     {button}
//   </div>
//   {isDropdownOpen && (
//     <div className={styles.listContainer}>
//       <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
//         {children}
//       </div>
//     </div>
//   )}
// </div>
