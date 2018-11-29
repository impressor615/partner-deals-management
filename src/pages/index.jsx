import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import ScrollToTop from '@/components/ScrollToTop';
import Hello from '@/components/Hello';
import configureStore from '@/configureStore';

import Login from './login';


const store = configureStore();

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Hello} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </ScrollToTop>
        </Router>
      </Provider>
    );
  }
}

export default App;
