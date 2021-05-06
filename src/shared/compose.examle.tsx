import * as React from 'react';
import { getValue } from '../utils/react/pickFromSyntheticEvent';
import { preventDefault} from '../utils/react/preventDefault';
import { stopPropagation} from '../utils/react/stopPropagation';

 function InputExample({ value, onChange }: any) {
   return (
     <input
       value={value}
       // onСhange={preventDefault(stopPropagation(getValue(onChange)))}
       onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
       // onChange={compose(onChange, getValue, stopPropagation, preventDefault)} //compose выполнит все функции по очереди, справа налево
       />
   )
 }

 function compose<U>(...fns: Function[]) {
   return <E,>(initialValue: any): U =>
   fns.reduceRight((previousValue,fn) => fn(previousValue), initialValue); //reduxeright - аналог reduce который еидетне слева направо а справа налево

 }

 function pipe<U>(...fns: Function[]) {
   return <E,>(initialValue: any): U =>
     fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
 }

 function pick<K extends string>(prop: K) {   // pick забирает у обхуетка в-ва
   return <O extends Record<K, any>>(obj: O) => obj[prop]
 }

 const some = pick('value')({value: 1}); // -> 1

 function isEqual<T>(left: T) {    //просто проверяет на равенство
   return <E extends T>(right: E) => left === right;
 }


 const comments = [{id:22, text: 'text One'}, {id: 44, text: 'Text Two'}];

 const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond);
 const filterWithId = createFilterBy('id');

 const filterWithId22 = createFilterBy('id')(22);
 const filterByValue = createFilterBy('value');
 // const filterComments = comments.filter(({id}) => id!== 22);

const filterComments = comments.filter(filterWithId22);

function cond(b: boolean) {
  return !b;
}

const getValueNumber = pipe<number>(
  pick('currentTarget'),
  pick('value'),
  parseInt
);