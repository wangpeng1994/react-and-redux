import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
  'First': 0,
  'Second': 10,
  'Third': 20
};

const store = createStore(reducer, initValues);

export default store;  // Redux对store封装的很好，所以禁止直接修改状态
