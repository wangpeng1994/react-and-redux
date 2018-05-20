import React from 'react';

function removeUserProp(WrappedComponent) {
  return class NewComponent extends WrappedComponent {
    render() {
      const { user, ...otherProps } = this.props;
      this.props = otherProps;
      // super关键字用于访问和调用当前对象的父对象上的函数
      return super.render();
    }
  };
}

/*
function removeUserProp(WrappedComponent) {
  return class NewComponent extends WrappedComponent {
    render() {
      const elements = super.render();
      const {user, ...otherProps} = this.props;

      console.log('##', elements);

      return React.cloneElement(elements, otherProps, elements.props.children);
    }
  };
}
*/

export default removeUserProp;

import React from 'react';

function removeProps(WrappedComponet) {
  return class newComponent extends WrappedComponet {
    render() {
      const { user, ...newProps } = this.props;
      this.props = newProps;
      return super.render();
    }
  }
}

export default removeProps;
