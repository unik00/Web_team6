import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import MyReducer from './redux/reducer/index';

import './assets/css/animate.css'
import './assets/css/bootstrap.min.css'
import './assets/css/line-awesome.css'
import './assets/css/line-awesome-font-awesome.min.css'
import './assets/css/font-awesome.min.css'
import './assets/lib/slick/slick.css'
import './assets/lib/slick/slick-theme.css'
import './assets/css/style.css'
import './assets/css/responsive.css'


const store = createStore(MyReducer, applyMiddleware(thunk));

ReactDOM.render(
  // 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
