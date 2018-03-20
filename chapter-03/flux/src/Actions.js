import * as ActionTypes from './ActionTypes.js';
import AppDispatcher from './AppDispatcher.js';

export const increment = (counterCaption) => {
  AppDispatcher.dispatch({ // 此动作翻译为，名字为xxx的计数器要做加一动作
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  });
};

export const decrement = (counterCaption) => {
  AppDispatcher.dispatch({
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  });
};

// 除了定义action的type文件外，这个文件是定义action的构造函数（action creator）
// 这个文件虽然习惯上叫做 Actions，但并不是action动作对象的本身，而是能产生并派发action对象的函数
