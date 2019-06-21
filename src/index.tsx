import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import io from 'socket.io-client';

import App from './app';
import Reducer from './stores/rootReducer';
import rootSaga from './stores/rootSaga';
import ProductAction from './stores/products/ProductAction';

import './index.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

store.dispatch(ProductAction.getProducts());

const socket = io(process.env.REACT_APP_INVENTORY_API_URL);
socket.on('products', () => store.dispatch(ProductAction.getProducts()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if ((module as any).hot && process.env.NODE_ENV !== 'production') {
  (module as any).hot.accept('./app', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  });
}
