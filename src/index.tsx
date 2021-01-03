import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import App from './screens/App';
import NotFound from './screens/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/:request" component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById('root')
);