import React from 'react';
import { Provider } from 'react-redux';
import { MdMenu } from 'react-icons/md';

import { Menu, Header } from './components';
import GlobalStyle, { primaryColor } from './styles/global';
/**
 * Routes of app
 * Disponibility:
 * Main
 */
import Routes from './routes';
import store from './store';
import { isSigned } from './services/auth';

const App = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const menuControl = React.useCallback(() => {
    setMenuOpen(c => !c);
  }, [setMenuOpen]);

  return (
    <Provider store={store}>
      <GlobalStyle />
      {!isSigned() && (
        <Menu
          isOpen={menuOpen}
          customBurgerIcon={
            <MdMenu onClick={menuControl} color={primaryColor} />
          }
        />
      )}
      <Header />
      <Routes />
    </Provider>
  );
};

export default App;
