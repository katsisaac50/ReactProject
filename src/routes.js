import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import App from './containers/App'
import SimpleApp from './containers/SimpleApp'
import Home from './containers/Home'
import Code from './containers/Code'
import Contact from './containers/Contact'

export default (
    <Router history={hashHistory}>

      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
      </Route>


      <Route path="/content" component={SimpleApp}>
        <IndexRoute component={Code} />
      </Route>

      <Route path="/contact" component={SimpleApp}>
        <IndexRoute component={Contact} />
      </Route>
    </Router>

);