import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import { Layout } from './components/Layout/Layout';
import { Dashboard } from './Pages/Dashboard';
import { List } from './Pages/List/index';

/* Импортируем цветовую тему */
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  );

}

export default App;
