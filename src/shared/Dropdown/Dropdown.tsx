import React from 'react';
import styles from './dropdown.scss';
import set = Reflect.set;

interface IDropdownProps {
  // создаем кнопку на которую будем нажимать
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
  // менять начальное состояние поможет useefeect
  React.useEffect(() => {
    setIsDropdownOpen(isOpen)
  }, [isOpen])

  // также нам надо активировать колбэки onopen и onclose
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(),[isDropdownOpen])

  // введем собственный handler который будет зависеть от свойства isopen
  //будет хэндлить закрытие открытие списка

  const handleOpen = () => {
    // tclb мы передали переменную изопен
    if (isOpen === undefined) {
    //  если мы передали undefined то есть ничего то мы хотим чтобы список рботал переключал состояниеавтоматичеси
      setIsDropdownOpen(!isDropdownOpen)
    }
  }
  // сделаем дропдауну возможнмть котролитровать свое поведение сверху
  return (
  <div className={styles.container}>
  <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
    { button }
  </div>
    {isDropdownOpen && (
      <div className={styles.listContainer}>
        {/* по нажати. на любой элемент в чилдрене*/}
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
