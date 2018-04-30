import React, { Component, PropTypes } from 'react';
// 注意: React.PropTypes 自 React v15.5 起已弃用。请使用 prop-types 库代替
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions.js';

class AddTodo extends Component {

  constructor() { // 或者仍然 props, context
    super(...arguments);
    this.refInput = this.refInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const input = this.input;
    if (!input.value.trim()) {
      return;
    }
    this.props.onAdd(input.value); // 调用dispatch方法
    input.value = '';
  }

  refInput(node) {
    this.input = node;
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" ref={this.refInput} />
          <button className="add-btn" type="submit">
            添加
            </button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequred
}

const mapDispatchToProps = (dispatch) => {  // 还可以有第二个参数ownProps，代表自身外层传入的属性
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);