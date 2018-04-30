import React, { PropTypes } from 'react';


const TodoItem = ({ onToggle, onRemove, completed, text }) => {

  return (
    <li
      className="todo-item"
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {/* checkbox readOnly是为了勾选不依赖用户输入，而是dispatch改变上层state，再作为props传到这 */}
      <input className="toggle" type="checkbox" checked={completed ? "checked" : ""} readOnly onClick={onToggle} />
      <label className="text">{text}</label>
      <button className="remove" onClick={onRemove}>×</button>
    </li>
  )
}

TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequred,
  onRemove: PropTypes.func.isRequred,
  completed: PropTypes.bool.isRequred,
  text: PropTypes.string.isRequred
}

export default TodoItem;