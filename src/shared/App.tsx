import React from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './Layout'
import { Header } from './Header';
import { Content } from './Content';
import { CardsList } from './CardsList';
import { MyHooks } from '../HooksExample';
import { getValue } from '../utils/react/pickFromSyntheticEvent';
import { MyList } from './GenericList';
import { assignId, generateId } from '../utils/react/generateRandomIndex';
import { merge } from '../utils/js/merge';

const LIST = [
  { value: 'some'},
  { value: 'other some'},
  { value: 'some'}
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

  const handleItemClick = (id: string) => {
    console.log(id);
  }
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
          {/*<button onClick={() => setIsVisible(!isVisible)}>Change me!</button>*/}
          {/*<input type="text" onChange={getValue(setTitle)} />*/}
          {/*{isVisible && <MyHooks title={title} id="11" /> }*/}
          <MyList list={LIST} />
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
