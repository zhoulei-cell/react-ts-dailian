import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './assets/scss/base.scss'
import rem from './utils/rem'
import routes, { IRoutes } from './routes'
import { HashRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

rem.init()

ReactDOM.render(
  <Router>
    {
      routes.map((route: IRoutes, index: number) => (
        <Route {...route} key={index}></Route>
      ))
    }
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
