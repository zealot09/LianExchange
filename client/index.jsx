import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter} from 'redux-simple-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';
import React from 'react';

import App from './containers/App';
import Buy from './containers/Buy';

import configure from './store';
import 'icheck/skins/all.css';
import './public/css/reset.css';
import './public/css/base.css';

const store = configure();
const history = createHistory();
history.listen(() => {
  console.log('------')
})
// history={history}
// location="hash"
syncReduxAndRouter(history, store);

var routers = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="buy" component={Buy} />
      </Route>
      <Route path="/sell" component={Buy}>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(routers,
  document.getElementById('root')
)
