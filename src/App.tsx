import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

import { TabProvider } from './contexts/tab';
import { ListSalvaProvider } from './contexts/listSalva';

const App: React.FC = () => (
  <TabProvider>
    <ListSalvaProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ListSalvaProvider>
  </TabProvider>
);

export default App;
