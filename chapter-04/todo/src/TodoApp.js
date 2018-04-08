import React from 'react';
import { view as Todos } from './todos/';
import { view as Filter } from './filter/';
function TodoApp() {
  return (
    <div>
      <Todos />
      <Filter />
    </div>
  );
}
// 这里顶层文件要做的就是渲染两个视图文件，然后暴露给入口文件，被其Provider包裹
export default TodoApp;
