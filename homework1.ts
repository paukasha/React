//№1 Напишите тип функции, конкатенирующей две строки concat('Hello ', 'World') // -> Hello World;
type TypeFn = (value: string) => string;
const ArrowFn: TypeFn = (value) => value.concat( 'Hello ', 'world' );

//№2 Напишите интерфейс
interface MyHomeTaskInterface {
 howIDoIt: string;
 simeArray: ( string | number )[];
 withData: ( [] | object )[];
}
const MyHometask: MyHomeTaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: [ 'string one', 'string two', 42 ],
  withData: [ { howIDoIt: 'I Do It Wel', simeArray: [ 'string one', 23 ] } ],
}

//№3 добавьте типизацию для метода reduce
const initialValue = 0;
const myArray: Array<number> = [1,2,3];
interface MyArray<T> {
  [N: number]: T
  reduce<U>(fn:(accumulator: T, value: T, index: number, MyArray: T[]) => U): MyArray<U>;
}
myArray.reduce((accumulator, value) => accumulator + value, initialValue);

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
type TMyType<T> = T extends ((...args: infer R) => any) ? R : never;
type t = TMyType<typeof HomeComponent>;





