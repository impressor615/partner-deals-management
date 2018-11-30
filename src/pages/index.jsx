import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppContainer from '@/components/AppContainer';
import ScrollToTop from '@/components/ScrollToTop';
import configureStore from '@/configureStore';

import Login from './login';
import Deals from './deals';


const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <AppContainer>
        <ScrollToTop>
          <Switch>
            <Route exact path="/deals" component={Deals} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </ScrollToTop>
      </AppContainer>
    </Router>
  </Provider>
);

export default App;
