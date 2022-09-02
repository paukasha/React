import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import styles from './commentform.scss';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent) => void;

}
export function CommentForm({value, onChange, onSubmit}: Props) {
  // const store = useStore<RootState>();
  // const value = store.getState().commentText;

  // const value = useSelector<RootState, string>(state => state.commentText);
  // const dispatch = useDispatch();

  // const { onChange } = useContext(commentContext);

  // function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
  //   dispatch(updateComment(event.target.value))
  // }
  //
  // function handleSubmit(event: FormEvent) {
  //   event.preventDefault();
  // console.log(value);
  // }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea className={styles.input} value={value} onChange={onChange}/>
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

