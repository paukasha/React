import React, {ChangeEvent, FormEvent, useContext, useRef, useState} from 'react';
import styles from './commentform.css';
import {commentContext} from "../../context/commentContext";

// type Props = {
//   value: string;
//   onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
//   onSubmit: (event: FormEvent) => void;
//
// }

export function CommentForm() {
    const {value, onChange} = useContext(commentContext)

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
      console.log(value)
  }
  return (
    <form className={styles.form}
          onSubmit={handleSubmit}
          >
      <textarea className={styles.input}
                onChange={handleChange} value={value}
                 />
      <button type="submit"
              className={styles.button} >Комментировать
      </button >
    </form >
  );
}
