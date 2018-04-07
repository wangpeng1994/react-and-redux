import { ADD_TODO, TOGGLE_TODO } from './actionTypes.js';
// actions.js 文件是用来生成action的构造函数
// 因为组件调用disatch时传入的action除了type之外，也会携带其他组件内部产生的信息，一同分发到reduce做相应状态字段的计算更新
let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  completed: false,
  id: nextTodoId ++,
  text: text
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id: id
});

