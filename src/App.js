import React from 'react';
import { Provider } from 'react-redux';

import { Menu, Header } from './components';
import GlobalStyle from './styles/global';
/**
 * Routes of app
 * Disponibility:
 * Main
 */
import Routes from './routes';
import store from './store';
import { isSigned, expireToken, getRemember } from './services/auth';

const App = () => {
  React.useEffect(() => {
    if (!getRemember()) {
      expireToken(20000);
    }
  }, []);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header style={{ marginTop: 10 }} />
      {isSigned() && <Menu />}
      <Routes />
    </Provider>
  );
};

export default App;
