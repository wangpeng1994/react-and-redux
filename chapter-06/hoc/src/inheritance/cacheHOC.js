import React from 'react';

const cacheHOC = (WrappedComponent) => {
  return class NewComponent extends WrappedComponent {
    shouldComponentUpdate(nextProps, nextState) {
      // 如果要使用缓存，那么就return false，组件不作更新
      return !nextProps.useCache;
    }
  }
}

export default onlyForLoggedinHOC;
