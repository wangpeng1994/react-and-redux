import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem.js';
import { FilterTypes } from '../../constants.js';
import { toggleTodo, removeTodo } from '../actions.js';
// import { bindActionCreators } from 'redux';



const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
  return ( // 定义在形参里，就不用 this.props 来使用了
    <ul className="todo-list">
      {
        todos.map((item) => {
          <TodoItem
            key={item.id}
            text={item.text}
            completed={item.completed}
            onToggle={() => onToggleTodo(item.id)}
            onRemove={() => onRemoveTodo(item.id)}
          />
        })
      }
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequested
}

// 渲染todo列表的时候，要根据State里filter过滤字段的要求来渲染
const selectVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed);
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed);
    default: // 这个逻辑能进来就见鬼了！
      throw new Error('unsupported filter');
  }
}

const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state.todos, state.filter)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
    onRemoveTodo: (id) => {
      dispatch(removeTodo(id));
    }
  }
}


/*
// 使用bindActionCreators消除重复
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onToggleTodo: toggleTodo,
  onRemoveTodo: removeTodo
}, dispatch);
*/

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)