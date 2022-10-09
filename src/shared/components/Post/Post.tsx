import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
// import {CommentFormContainer} from '../../forms/CommentFormContainer/CommentFormContainer';
import {CommentForm} from "../../forms/CommentForm";
import {UserLink} from "../../lists/CardsList/Card/TextContent/MetaData/UserLink";
import {CreatedAt} from "../../lists/CardsList/Card/TextContent/MetaData/CreatedAt";
import {KarmaValue} from "../Controls/KarmaValue";
import {Icon} from "../../base-components/Icon";
import {EIcons} from '../Icons/AllIcons'

import  {EColor, Text} from '../../base-components/Text'

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

  const answerMenuList = [
    {id: 1, icon: EIcons.comment, text: 'Ответить'},
    {id: 2, icon: EIcons.share, text: 'Поделиться'},
    {id: 5, icon: EIcons.warning, text: 'Пожаловаться'},
  ]

  const [isAnswerFormOpen, setIsAnswerFormOpen] = useState(false)

  function openAnswerForm(id:number) {
    if (id ===1) {
      setIsAnswerFormOpen(true)
    }
  }

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

      <ul >
        <li className={styles.answer__item} >
          <KarmaValue />

          <div className={styles.answer__top}>
            <UserLink author={'Иванов Иван'} />
            <CreatedAt created={789} />
            <div className={styles.group_type} >
              Лига юристов
            </div >
          </div>

          <div className={styles.stick} >

          </div >

          <div className={styles.answer} >
            Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь
            реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно.
          </div >

          <ul className={styles.answer__menu} >
            {answerMenuList.map((el, idx) => <li className={styles.answer__menuitem}
                  key={idx}
                  onClick={() => openAnswerForm(el.id)} >
                <Icon name={el.icon}
                      iconClass='icon18' />

              <Text>{el.text}</Text>
              </li >
            )}
          </ul >

          {isAnswerFormOpen && <div className={styles.answer__form} >
            <CommentForm buttonText={'Ответить'} author={'Иванов Иван'} />
          </div >}
        </li >
      </ul >
    </div >
  ), node);
}
