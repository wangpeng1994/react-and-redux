import React, { Component } from 'react'; // 用到jsx的地方，就要在当前引入react， 否则似乎不需要再次引入
import Counter from './Counter.js';
import Summary from './Summary.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    return (
      <div style={style}>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <hr/>
        <Summary />
      </div>
    );
  }
}

export default ControlPanel;

