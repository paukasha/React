import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentform.scss';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState, updateComment } from '../../store';
import { CommentForm } from '../CommentForm';



export function CommentFormContainer() {
  // const store = useStore<RootState>();
  // const value = store.getState().commentText;

  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  // const { onChange } = useContext(commentContext);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <CommentForm
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
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

