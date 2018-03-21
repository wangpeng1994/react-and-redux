import React, { PropTypes } from 'react';
import * as Actions from '../Actions.js';
import {connect} from 'react-redux';

const buttonStyle = {
  margin: '10px'
};

function Counter({caption, onIncrement, onDecrement, value}) {  // 本例纯到不需要state，也就不需要用类的方法来定义组件
                // 所以这里给Counter传入的props实际上只有第一个真正来自实际外层调用时的传入，其余三个都是connect函数映射的
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

function mapStateToProps(state, ownProps) { // ownProps：自身组件调用时传入的props，这里Controlpanel调用Counter时传入了caption
  return { // 映射成了内层组件的props ----> value
    value: state[ownProps.caption]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption));
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption));
    }
  }
}

//  connect函数执行后，得到的返回函数再执行，得到了容器组件，负责和store打交道，其内包含了傻瓜组件，用于渲染UI
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// 容器组件：
// 1. 连接store，转化为props给傻瓜组件
// 2. 加载后监听store更新内部状态
// 3. 卸载后注销store的监听
// 4. 响应用户操作，向store派遣action

// 傻瓜组件：
// 根据props（和state）渲染用户界面
//


