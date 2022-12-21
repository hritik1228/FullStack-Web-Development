import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import {legacy_createStore as createStore, legacy_createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './services/Reducer/index'

const store=legacy_createStore(rootReducer)
// console.log(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);