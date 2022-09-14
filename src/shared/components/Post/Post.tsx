import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
// import {CommentFormContainer} from '../../forms/CommentFormContainer/CommentFormContainer';
import {CommentForm} from "../../forms/CommentForm";

interface IPost {
  onClose?: () => void;
}

export function Post(props: IPost) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !modalRef.current?.contains(event.target)) {
        props.onClose?.();
      }
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);
  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal((
   <div className={styles.modal}
         ref={modalRef} >
      <h2 >Реализация намеченных плановых заданий Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..</h2 >
      <div className={styles.content} >
        <p >Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как
          квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего,
          начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но
          сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в
          посмешище, хотя само их существование приносит несомненную пользу обществу.</p >
        <p >Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как
          квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего,
          начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но
          сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в
          посмешище, хотя само их существование приносит несомненную пользу обществу.</p >
        <p >Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как
          квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего,
          начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но
          сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в
          посмешище, хотя само их существование приносит несомненную пользу обществу.</p >
      </div >
      <CommentForm />
    </div >
  ), node);
}
