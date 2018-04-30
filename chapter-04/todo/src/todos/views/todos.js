import React from 'react';
import AddTodo from './addTodo.js';
import TodoList from './todoList.js';
import './style.css';

export default () => { // 匿名式默认导出即可
  return (  // 这里的className 来自 js语法，因为js中class是个关键字，所以js语法里表示css  class类是用的className
    <div className="todos">
      <AddTodo />
      <TodoList />
    </div>
  );
}
