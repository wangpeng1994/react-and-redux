import * as ActionTypes from './ActionTypes.js';

export default (state, action) => {
  const {counterCaption} = action;

  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {...state, [counterCaption]: state[counterCaption] + 1};
      // state[counterCaption] ++; // reducer 应该是没有副作用的纯函数，返回全新的state, 否则产生其他副作用
    case ActionTypes.DECREMENT:
      return {...state, [counterCaption]: state[counterCaption] - 1};
      // state[counterCaption] --;
    default:
      return state
  }
}
