import React, {ChangeEvent, FormEvent, useContext, useEffect, useRef, useState} from 'react';
import styles from './commentform.css';
import {commentContext} from "../../context/commentContext";

type Props = {
  buttonText?: string
  author?: string
}

export function CommentForm({buttonText, author}:Props) {


  const ref = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    ref?.current?.focus();
    if (ref?.current) {
      ref.current.value = author ? author + ', ' : ''
    }
    if (ref?.current?.value.length != null && author) {
      ref.current.selectionStart = ref?.current?.value.length;
    }
  }, []);


  const {value, onChange} = useContext(commentContext)

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value)
  }

  function handleSubmit (event: FormEvent) {
    event.preventDefault()
    console.log(value ? value : ref.current?.value)
  }

  return (
    // controlled
    <form className={styles.form}
          onSubmit={handleSubmit} >
      <textarea className={styles.input}
                onChange={handleChange} value={value}
                ref={ref}
      />
      <button type="submit"
              className={styles.button} >Комментировать
      </button >
    </form >

    // uncontrolled
    // <form  className={styles.form} onSubmit={handleSubmit}>
    //   <textarea className={styles.input}
    //             ref={ref} />
    //     <button type="submit"
    //              className={styles.button} >{buttonText ? buttonText : 'Комментировать'}
    //     </button >
    // </form>
  );
}
