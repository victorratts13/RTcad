import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CFDA from './content/CFDA';
import CDD from './content/CDD';
import CDG from './content/CDG';
import * as serviceWorker from './serviceWorker';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './ui/Home';

ReactDOM.render(
<Router history={hashHistory}>
    <Route path='/' component={App} >
        <IndexRoute component={Home} />
        <Route path='/CFDA' component={CFDA} />
        <Route path='/CDD' component={CDD} />
        <Route path='/CDG' component={CDG} />
  </Route>
</Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
