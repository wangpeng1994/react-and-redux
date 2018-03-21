import React, { Component, PropTypes } from 'react';

import store from '../Store.js';  // 这里的直接导入store是存在隐患的，假如开发的独立组件给别人使用，该如何保证正确的store引入路径呢？
import * as Actions from '../Actions.js';

const buttonStyle = {
  margin: '10px'
};

// class Counter extends Component {  // 无状态（无state）的傻瓜组件，所有数据来自于props
//   render() {
//     const {caption, onIncrement, onDecrement, value} = this.props;

//     return (
//       <div>
//         <button style={buttonStyle} onClick={onIncrement}>+</button>
//         <button style={buttonStyle} onClick={onDecrement}>-</button>
//         <span>{caption} count: {value}</span>
//       </div>
//     );
//   }
// }

function Counter({ caption, onIncrement, onDecrement, value }) { // 因为傻瓜组件是无状态的，所以不需要类了，直接用函数声明组件
  //const { caption, onIncrement, onDecrement, value } = props; // 可以直接把结构赋值放在参数部分

  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  );
}




Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};


class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);

    this.state = this.getOwnState();
  }

  getOwnState() {
    return {
      value: store.getState()[this.props.caption]
    };
  }

  onIncrement() {
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

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  render() {
    return <Counter caption={this.props.caption}
      onIncrement={this.onIncrement}
      onDecrement={this.onDecrement}
      value={this.state.value} />
  }
}

CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired
};

export default CounterContainer; // 虽然默认导出了容器，但外部使用这个视图模块的时候，还是按照整个 Counter名字用的

