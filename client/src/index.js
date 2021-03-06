import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './reducers/index'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
    
  ,

  document.getElementById('root')
);

