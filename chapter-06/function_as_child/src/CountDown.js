import React from 'react';

class CountDown extends React.Component {

  constructor() {
    super(...arguments);

    this.state = { count: this.props.startCount };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count;
    // 也可以加入对函数形式的子组件this.props.children 的判断 
  }

  componentDidMount() {
    this.intervalHandle = setInterval(() => {
      const newCount = this.state.count - 1;
      if (newCount >= 0) {
        this.setState({ count: newCount });
      } else {
        window.clearInterval(this.intervalHandle);
        this.intervalHandle = null;
      }
    }, 1000);
  }

  // 因为也有可能提前卸载，所以这里也需要clearInterval
  componentWillUnmount() {
    if (this.intervalHandle) {
      window.clearInterval(this.intervalHandle);
      this.intervalHandle = null;
    }
  }

  render() {
    return this.props.children(this.state.count);
  }
}

CountDown.propTypes = {
  children: React.PropTypes.func.isRequired,
  startCount: React.PropTypes.number.isRequired
}

export default CountDown;

// 吃法：
<CountDown startCount={10}>
  {(count) => <div>{count}</div>}
</CountDown>
