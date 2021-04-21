import React from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './Layout'
import { Header } from './Header';
import { Content } from './Content';
import { CardsList } from './CardsList';

// import { MyHooks } from './HooksExample';
// import { getValue } from './utils/react/pickFromSyntheticEvent';
function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList/>
      </Content>
    </Layout>
  );
}
//
// function AppComponent() {
//   const [isVisible, setIsVisible] = React.useState(false);
//   const [ title, setTitle ] = React.useState('');
//   return (
//     <Layout>
//       <Header />
//       <Content>
//         <CardList />
//           <button onClick={() => setIsVisible(!isVisible)}>Change me!</button>
//           <input type="text" onChange={getValue(setTitle)} />
//           {isVisible && <MyHooks title={title} id="11" /> }
//       </Content>
//     </Layout>
//   );
// }

export const App = hot(() => <AppComponent />);
