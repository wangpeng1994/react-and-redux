import React, { Component, PropTypes } from 'react';
// 注意: React.PropTypes 自 React v15.5 起已弃用。请使用 prop-types 库代替
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions.js';

class AddTodo extends Component {

  constructor() { // 或者仍然 props, context
    super(...arguments);
    // this.refInput = this.refInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      value: ''
    }
  }

  // onSubmit(e) {
  //   e.preventDefault();
  //   const input = this.input;
  //   if (!input.value.trim()) { // 修剪字符串两头空白字符
  //     return;
  //   }
  //   this.props.onAdd(input.value); // 调用dispatch方法
  //   input.value = '';
  // }

  onSubmit(e) {
    e.preventDefault();
    const inputValue = this.state.value;
    if (!inputValue.trim()) { // 修剪字符串两头空白字符
      return;
    }
    this.props.onAdd(inputValue); // 调用dispatch方法
    this.setState({ value: '' });
  }



  //dom mount后，会查看ref属性是否是函数，是则传入当前组件的real dom来执行此函数
  // refInput(node) {
  //   this.input = node;
  // }

  // 下面是不使用ref的做法：
  onInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          {/* <input className="new-todo" ref={this.refInput} /> */}
          <input className="new-todo" onChange={this.onInputChange} value={this.state.value} />
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