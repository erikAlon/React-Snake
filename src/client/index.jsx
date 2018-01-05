import React from 'react';
import { render } from 'react-dom';
import reducers from './reducers';
import './styles/index.css';

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Game />
  </Provider>
  , 
  document.getElementById('root')
);
