import {createSelector} from 'reselect';
import {FilterTypes} from '../constants.js';

const getFilter = (state) => state.filter;
const getTodos = (state) => state.todos;

export const selectVisibleTodos = createSelector( // 创造选择器函数是高阶函数，以函数为参数，返回新的函数
  [getFilter, getTodos], // 步骤一需要的映射计算
  (filter, todos) => { // 步骤二计算选择器需要返回的最终数据，参数是步骤一的返回结果
    switch (filter) { // 步骤二内部和之前写法没有不同，区别在于不是每次都被调用，可能根据步骤一的判断直接使用缓存
      case FilterTypes.ALL:
        return todos;
      case FilterTypes.COMPLETED:
        return todos.filter(item => item.completed);
      case FilterTypes.UNCOMPLETED:
        return todos.filter(item => !item.completed);
      default:
        throw new Error('unsupported filter');
    }
  }
);
