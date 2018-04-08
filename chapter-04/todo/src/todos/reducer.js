import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes.js';

export default (state = [], action) => {
  switch (action.type) {
    // 针对action.type所有可能值的case语句
    case ADD_TODO: {
      return [  // reduce必须返回纯函数，不能直接push，unshift
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state  // 还可以考虑使用concat，不过没有扩展操作符简洁
      ]
    }
  }
}