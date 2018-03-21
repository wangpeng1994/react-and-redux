import * as ActionTypes from './ActionTypes.js';

export const increment = (counterCaption) => {
  return {
    type: ActionTypes.INCREMENT,
    counterCaption
  };
};

export const decrement = (counterCaption) => {
  return {
    type: ActionTypes.DECREMENT,
    counterCaption
  };
};

// redux的action更加纯粹专一，只是返回action对象，至于如何处理这个对象，则交给调用者，而不像flux中，定义的同时还会
// 调用 Dispatcher 的dispatch函数进行派发
