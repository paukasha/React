import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import styles from './commentform.scss';
import { commentContext } from '../context/commentContext';


export function CommentForm() {
  const { value, onChange } = useContext(commentContext);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  console.log(value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange}/>
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
}

// export function CommentForm() {
//   const ref = useRef<HTMLTextAreaElement>(null);
//
//   function handleSubmit(event: FormEvent) {
//     event.preventDefault();
//     console.log(ref.current?.value);
//   }
//
//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <textarea className={styles.input} ref={ref}/>
//       <button type="submit" className={styles.button}>Комментировать</button>
//     </form>
//   );
// }

