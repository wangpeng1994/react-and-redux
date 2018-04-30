import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';

import Perf from 'react-addons-perf'

const win = window;
win.Perf = Perf

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant')());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

// 第二个参数是preloadedState，用于可选初始化state，需要和combineReducers组合成的state保持一致
export default createStore(reducer, {}, storeEnhancers);
// 也可以不传第二个参数，第三个参数storeEnhancers默认到了第二个位置

/**
 * createStore源码
 */
// export default function createStore(reducer, preloadedState, enhancer) {
//   if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
//     enhancer = preloadedState
//     preloadedState = undefined
//   }

//   if (typeof enhancer !== 'undefined') {
//     if (typeof enhancer !== 'function') {
//       throw new Error('Expected the enhancer to be a function.')
//     }

//     return enhancer(createStore)(reducer, preloadedState)
//   }
//   //...省略很多字
// }
