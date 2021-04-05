//№1 Напишите тип функции, конкатенирующей две строки concat('Hello ', 'World') // -> Hello World;
let concatFunction = (value1: string, value2: string) => value1 + value2;
let result = concatFunction('Hello', 'World');


// №2 Напишите интерфейс
interface MyHomeTaskInterface {
 howIDoIt: string;
 simeArray: ( string | number )[];
  withData: {[N: string | (string | number )[]]};
}

const MyHometask: MyHomeTaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: [ 'string one', 'string two', 42 ],
  withData: [ { howIDoIt: 'I Do It Wel', simeArray: [ 'string one', 23 ] } ],
}

//№3 добавьте типизацию для метода reduce
const initialValue = 0;
const myArray: MyArray<number> = [1,2,3];
interface MyArray<T> {
  [N: number]: T
  reduce<U>(fn:(accumulator: U, value: T, index: number, MyArray: T[]) => U, initialValue: U): MyArray<U>;
}
myArray.reduce((accumulator, value) => accumulator + value, initialValue); // -> 6

//№4. Работа с MappedTypes
interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  }
}

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
};

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
    value: 'win'
  }
};


//#5 Напишите такой тип, который извлечет тип props из этого или любого другого React компонента.
function HomeComponent(props: { firstProp: string }) {
  return (
    <div>{ props.firstProp }</div>
  )
}
interface IProps {
  firstProp: string
}
type TMyType<T> = T extends React.ComponentType<infer R> ? R : never;
type t = TMyType<typeof HomeComponent>;

//№6 Напишите такой тип TGetJSXPropsProp, который извлекает все HTML свойства, доступные для любого jsx элемента.

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

type TGetJSXPropsProp = JSX.IntrinsicElements;
const props: TGetJSXPropsProp = {
  abr: 456,
  className: 'handler',

}



