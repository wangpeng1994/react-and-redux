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
    case TOGGLE_TODO: {
      return state.map((todoItem) => {
        if (todoItem.id === action.id) {
          return { ...todoItem, completed: !todoItem.completed }; // 修改指定的item的完成状态，进行取反
        } else {
          return todoItem; // 其余原样返回，最终是一个和原来数组等长对应的新数组
        }
      })
    }
    case REMOVE_TODO: {
      return state.filter((todoItem) => {
        return todoItem.id !== action.id;
      })
    }
    default: { // 默认值的作用：1. 未匹配到就原样返回state；2.不感兴趣的action也可能会传进来
      return state;      
    }
  }
}