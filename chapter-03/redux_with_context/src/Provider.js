import {PropTypes, Component} from 'react';

class Provider extends Component {

  getChildContext() { // context provider 必须
    return {
      store: this.props.store
    };
  }

  render() {
    return this.props.children;
  }

}

Provider.propTypes = {
  store: PropTypes.object.isRequired
}

Provider.childContextTypes = { // context provider 必须
  store: PropTypes.object
};

export default Provider;
