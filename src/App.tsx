import React, {useEffect} from 'react';
import './shared/main.global.css';
import {hot} from 'react-hot-loader/root';
import {Layout} from './shared/base-components/Layout'
import {Header} from './shared/components/Header';
import {Content} from './shared/base-components/Content';
import {CardsList} from './shared/lists/CardsList';


import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux'

import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {UserContextProvider} from "./shared/context/userContext";
import {commentContext} from "./shared/context/commentContext";
import {rootReducer} from "./store";
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));


function AppComponent() {
  useEffect(() => {


  })
  const [token] = useToken()

 const TokenProvider = tokenContext.Provider
  const CommentProvider = commentContext.Provider

  return (
    <Provider store={store}>

    <TokenProvider value={token}>
      <UserContextProvider>
        <Layout>
          <Header />
          <Content>
            <CardsList />
            <br/>
          </Content>
        </Layout>
      </UserContextProvider>

    </TokenProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);


