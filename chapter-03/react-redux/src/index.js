import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';  //这里的Provider变成了react-redux，不用自己定义context了

import ControlPanel from './views/ControlPanel';
import store from './Store.js';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ControlPanel/>
  </Provider>,
  document.getElementById('root')
);
