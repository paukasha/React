import React, {useState} from 'react';
import './shared/main.global.css';
import {hot} from 'react-hot-loader/root';
import {Layout} from './shared/base-components/Layout'
import {Header} from './shared/components/Header';
import {Content} from './shared/base-components/Content';
import {CardsList} from './shared/lists/CardsList';
import {generateId} from './utils/react/generateRandomIndex';


import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './store';
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {UserContextProvider} from "./shared/context/userContext";
import {commentContext} from "./shared/context/commentContext";
import {usePostsData} from "./hooks/usePostsData";
import {PostsContextProvider} from "./shared/context/postsContext";

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [token] = useToken()

  const [commentValue, setCommentValue] = useState('')
  const CommentProvider = commentContext.Provider




  return (
    <CommentProvider value={{value: commentValue,
                      onChange: setCommentValue
    }}>
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <Layout>
          <Header />
          <Content>
            <PostsContextProvider>
              <CardsList/>
            </PostsContextProvider>
            <br/>
          </Content>
        </Layout>
      </UserContextProvider>

    </tokenContext.Provider>
    </CommentProvider>

  );
}

export const App = hot(() => <AppComponent />);


