import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
import rootReducer from './rootReducer';

/**
 * Creates a Redux store that holds the complete state tree of your app.
 * createStore(reducer, [preloadedState], [enhancer])
 * 1. reducer (Function): A reducing function that returns the next state tree,
 * given the current state tree and an action to handle.
 * 2. preloadedState : Inital state
 * 3. The store enhancer: It to enhance the store with third-party capabilities
 * such as middleware, time travel, persistence, etc.
 * 4. composeWithDevTools: used to connect it redux devtoolextension
 * */
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
      </Provider>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
