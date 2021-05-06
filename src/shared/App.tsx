import React, { useState } from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './Layout'
import { Header } from './Header';
import { Content } from './Content';
import { CardsList } from './CardsList';
import { MyHooks } from '../HooksExample';
import { getValue } from '../utils/react/pickFromSyntheticEvent';
import { GenericList} from './GenericList';
import { assignId, generateId, generateRandomString } from '../utils/react/generateRandomIndex';
import { merge } from '../utils/js/merge';
import { Dropdown } from './Dropdown';
import { Text } from './Text';
import { Break } from './Break';
import { useToken } from '../hooks/useToken';
import { tokenContext } from './context/tokenContext';
import { userContext, UserContextProvider } from './context/userContext';
import {commentContext} from './context/commentContext';

const LIST = [
  { As: 'li' as const, text: 'some'},
  { As: 'li' as const, text: 'other some'},
  { As: 'li' as const, text: 'some'}
  ].map(generateId)
// было в map (item) => ({ ...item, id: generateRandomString() })

// import { MyHooks } from './HooksExample';
// import { getValue } from './utils/react/pickFromSyntheticEvent';
// function AppComponent() {
//   return (
//     <Layout>
//       <Header />
//       <Content>
//         <CardsList/>
//       </Content>
//     </Layout>
//   );
// }
//
function AppComponent() {

  // const [isVisible, setIsVisible] = React.useState(false);
  // const [ title, setTitle ] = React.useState('');
  // const [ list, setList ] = React.useState(LIST);
  // const handleItemClick = (id: string) => {
  //   // console.log(id);
  //   setList(list.filter((item) => item.id !== id ));
  // }
  // const handleAdd = () => {
  //   setList(list.concat(generateId({ text: generateRandomString(), As: 'li' as const})));
  // }
  const [commentValue, setCommentValue] = useState('');

  const [token] = useToken();
  const CommentProvider = commentContext.Provider;

  return (
    <CommentProvider value={
      {
        value: commentValue,
        onChange: setCommentValue,
      }
    }>
    <tokenContext.Provider value={token}>
      <UserContextProvider >
        <Layout>
          <Header />
          <Content>
            <CardsList />
            {/*<button onClick={handleAdd}>Add element</button>*/}
            {/*<button onClick={() => setIsVisible(!isVisible)}>Change me!</button>*/}
            {/*<input type="text" onChange={getValue(setTitle)} />*/}
            {/*{isVisible && <MyHooks title={title} id="11" /> }*/}

            {/*<MyList list={LIST} onClick={console.log} />*/}
            {/*<MyList list={LIST.map((item) =>( {...item, onClick: () =>{console.log(item.id)} }))} />*/}
            {/*<MyList list={LIST.map(merge( {onClick: () => {console.log('click')} }))} />*/}
            {/*<MyList list={list.map(merge( {onClick: handleItemClick }))} />*/}
            {/*<ul>*/}
            {/*  <GenericList list={list.map(merge( {onClick: handleItemClick }))} />*/}
            {/*</ul>*/}
            <br/>
            <div style={{padding: 20}}>
              <Dropdown
                onClose={() => console.log('closed')}
                onOpen={() => console.log('opened')}
                // isOpen={false}
                button={<button>Test</button>}
              >
                <CardsList />
                <br />
                <Text size={20} mobileSize={28} bold>label1</Text>
                <Break size={8} mobileSize={16} top />
                <Text size={20} >label2</Text>
                <Break size={8} mobileSize={16} top />
                <Text size={20} mobileSize={16}>label3</Text>

              </Dropdown>
            </div>
          </Content>

        </Layout>
      </UserContextProvider>

    </tokenContext.Provider>
    </CommentProvider>
  );
}

export const App = hot(() => <AppComponent />);

//d реакте можно указать компонент для jsx необхяателно напрямую,а можно указать переменную
//реакт для нативных элементов использует строковые названия 'a', 'li', 'div' итд эквивалентоно <li></li>
// то есть мы берем переменную As укладываем в нее div и рендерим див
// теперь можем сделать так <ul>  <GenericList list={list.map(merge( {onClick: handleItemClick }))} /> </ul> и каждому
// элементу можно erpffnm свойство As как li в интерфейсе As: 'li',