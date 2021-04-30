import { assoc } from '../js/assoc';

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const assignId = assoc('id', generateRandomString());  // здесь generaterandomstring вызывается один раз

//export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString()); //generaterandomstrimg dspsdftncz каждый раз когда мы вызываем ф-ю

export const generateId = <O extends object>(obj: O) => assignId(obj);

// теперь каждый рахз мы .eltv dspsdfnm a-. assugnid в которую будем передавать  наш объект и который будет  сливать их вместе



