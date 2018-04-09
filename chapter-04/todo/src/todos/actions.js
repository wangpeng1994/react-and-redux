import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes.js';

let nextTodoId = 0;

export const addTodo = (text) => ({ // 组件在dispatch时自会传入当前text内容
  type: ADD_TODO,
  completed: false,
  id: nextTodoId ++, // 每被调用一次，这里的nextTodoId就会增加1，第一次是0
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

