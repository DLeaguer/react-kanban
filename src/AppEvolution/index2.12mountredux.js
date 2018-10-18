import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers/reducers.js'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ); 
console.log('store in index.js', store)
// store.dispatch( {type: 'OMG', payload: 'LOLLERSKATES'} )


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));



//  Redux
//  1. Import redux, react-redux redux-thunk
//  2. Make actions.js in actions folder
//  3. Make reducers.js in reducers folder
//  4. Import createStore and apply Middleware from redux
//  5. Import provider from react-redux
//  6. In Index.js createstore, put in reducers, redux devtools and apply middleware(ReduxThunk)
//  7. Wrap top level component in <Provider store=(store)>
//
//  Show hydrating store with initial call
//  Show adding items, connecting form to redux
//  Show redux and react devtools 
//  Show deleting items
//
//  Then do redux-thunk

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
