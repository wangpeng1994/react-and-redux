/*

const ALL = 'all';
const COMPLETED = 'completed';
const UNCOMPLETED = 'uncompleted';

// 状态树设计：
{
  todos: [
    {
      text: 'First todo',
      completed: false,
      id: 0
    },
    {
      text: 'Second todo',
      comleted: false,
      id: 1
    }
  ]
  filter: 'all'
}

*/

import {createStore, combinReducers } from 'redux';

import { reducer as todoReducer } from './todos/';
import { reducer as filterReducer } from './filter/';

const reducer = combineReducers({
  todos: todoReducer, // 这里的字段名todos、filter和State中的字段名对应  todoReducer每一次执行出来的结果都作为State的todos字段
  filter: filterReducer // 实际上正是在这里定义了State的字段
});
// 合成后的reducer会将接收到的参数之一state对象拆开处理，todos字段的交给todoReducer处理,另同理
// 子reducer中接受的state是经过分配后的部分state，所以在各自reducer的实现上，专心处理自己的state，忽略其他staet字段即可

export default createStore(reducer); // 没有给状态初始值？ 在子reducer中最后会给state一个default值，即是初值