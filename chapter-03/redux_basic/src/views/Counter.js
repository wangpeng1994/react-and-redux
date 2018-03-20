import React, { Component, PropTypes } from 'react';

import store from '../Store.js';
import * as Actions from '../Actions.js';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);
    this.state = this.getOwnState(); // 在constructor中可以使用this调用，在之外的地方调用类中的函数，需要先bind(this)
  }

  getOwnState() {
    return {
      value: store.getState()[this.props.caption]
    };
  }

  onIncrement() { // 改变store唯一办法就是派发action
    store.dispatch(Actions.increment(this.props.caption));
  }

  onDecrement() {
    store.dispatch(Actions.decrement(this.props.caption));
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
      (nextState.value !== this.state.value);
  }

  componentDidMount() { // 这里的订阅写在构造函数中也是可以的
    store.subscribe(this.onChange); // 订阅store，有变化后就重新获取
  }

  componentWillUnmount() { // 绑定和清除，上下对应
    store.unsubscribe(this.onChange);
  }

  render() {
    const value = this.state.value;
    const {caption} = this.props;

    return (
      <div>
        <button style={buttonStyle} onClick={this.onIncrement}>+</button>
        <button style={buttonStyle} onClick={this.onDecrement}>-</button>
        <span>{caption} count: {value}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired
};

export default Counter;

