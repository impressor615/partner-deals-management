import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from '@/components/ScrollToTop';
import Hello from '@/components/Hello';

import Login from './login';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Hello} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
