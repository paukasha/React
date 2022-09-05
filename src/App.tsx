import React from 'react';
import './shared/main.global.css';
import {hot} from 'react-hot-loader/root';
import {Layout} from './shared/base-components/Layout'
import {Header} from './shared/components/Header';
import {Content} from './shared/base-components/Content';
import {CardsList} from './shared/lists/CardsList';
import {generateId, generateRandomString} from './utils/react/generateRandomIndex';


import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './store';


const LIST = [
  {As: 'li' as const, text: 'some'},
  {As: 'li' as const, text: 'other some'},
  {As: 'li' as const, text: 'some'}
].map(generateId)

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [list, setList] = React.useState(LIST)
  const handleItemClick = (id: string) => {
    setList(list.filter((item) => item.id !=id))
  }

  const handleAdd = () => {
    setList(list.concat(generateId({text: generateRandomString(), As: 'li' as const})))
  }

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <br/>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);


