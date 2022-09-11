// список хуков

// 1. use.State
// 2. useEffect +  жизненный цикл всего компонента  в одной функции
// 3. useRef
// 4. useReducer
// 5. useMemo +
// 6. useContext
// 7. useCallback
// 8. useImperativeHandle
// 9. useLayoutEffect
// 10. useDebugValue
import React from 'react';

// React.useEffect();

export function MyHooks({ title, id }: {title: string, id?: string}) {
  // React.useEffect(() => {
  //   // console.log('componentDidMount');   // принимает 2 арг-та: 1)callback 2) зависимости (deps), если не исп-ть второй арг то наш компонент превратится в componentdidmount и в componentwillupdate
  //   console.log('componentWillUpdate');
  // });
// rf кэто работет? каждый раз когда срабатывает рендер нашего приложения, у нас будет вызываться useefeect, естественно это юудет первый рендер поэтому это аналог componentdidmount и все последующие рендеры поэтому это аналог componentwillupdate
  // что будет если в честве второго арг-та указать пустой массив? в таком случае наша функция превратиться в компонент componentdidmount
  // как это работает? если мы не указываем зависимости вовсеб в таком случае useEfeect будет запускаться каждый раз при каждои рендере
  // если мы укажем в качестве зависимости пустой массив то мы как бы скажем useEffect что мы следим ни за чем,  он возьмет нулевой элемент массива
  // увидит там undefined , будет виеть его при каждом рендереб следить за гивуаштув в результате обработает только один раз
  // при componentdidmount соответсвенно обработает только один раз, соответсвенно useefeect с пустым массивом вузы это аналог componentdidmount

  // React.useEffect(() => { // срабатывает олдин раз, за исключением если мы возвращаем ф-ю
  //   console.log('componentDidMount');
  //   return () => {
  //     console.log('componentWillUnmount');
  //   }
  // }, []);

//теперь useEffect будет срабатвать каждый раз когда будет изменяться свойство title
  // если title не изменился то эта функция вызвана не будет? но при первом рендере title npvtybncz с никакого на тот что мы задали
  // и вызовется ф-я useEffect, поэтому useefeect всегда вызывается при первом рендере
//далее смотрим выше useefeect может вернуть ф-ю componentWillUnmount - эта ф-я вызовется прямо перед unmount? эту функцию мы можем добавлять в любой из useefeect
  // в любой конфигурации независимо от deps
  // React.useEffect(() => {
  //   console.log('componentWillReceiveProps: ', title);
  // }, [title]);

  // const [isMounted] = useIsMounted();
  //   React.useEffect(() => {
  //     console.log('isMounted ', isMounted);
  //   }, [isMounted])
  const items = 10;
  const multiplier = 5;
  const result = React.useMemo(

    () => calculate(items, multiplier),
    [items, multiplier]
  )
  return (
    <div>{title} {id} {result}</div>
  )
  //
  // как это работаетсмотри в файлуе app.tsx


// напишем свой хук, влхвращает true когда компонент оказался отремонтарован, поможет когда будем писать dropdow
  function useIsMounted() {
    const [isMounted, setIsMounted ] = React.useState(false);
    React.useEffect(() => {
      setIsMounted(true)
    }, [])
    return [isMounted]
  }
}

// с хукми нельзя
// хуки должны быть вызваны только из тела функционального компоннента
// нельзя менять порядок испольнения хукеов или оборачивать хуки в if

//хук useMemo

function calculate(items: number, multiplier: number) {
  return new Array(items).fill(1).reduce((a, v) => a*multiplier);
}

// usememo это практически useEfeect? он поз-ет минимизировать значения и использовать сЯ для сдложных вычислинеий , логика как в useEffect? если слоные вычисления то использовать useMemo

/**
 * font-size: 28px;
 * line-height: 33px;
 *
 * font-size: 20px;
 * line-height: 23px;
 *
 * font-size: 16px;
 * line-height: 19px;
 *
 * font-size: 14px;
 * line-height: 16px;
 *
 * font-size: 12px;
 * line-height: 14px;
 *
 * font-size: 10px;
 * line-height: 12px;
 *
 * span, h1234, p, div
 */
