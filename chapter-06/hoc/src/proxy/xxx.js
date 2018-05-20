import React from 'react';

const doNothing = () => { };

function connect(mapStateToProps = doNotihing, mapDispatchToProps = doNothing) {
  return function(WrappedComponent) {
    return class HOCComponent extends React.Component {
      // 定义高阶组件的生命周期函数
      // 为了实现类似 react-redux 的功能，HOCComponent组件需要一系列的成员函数来维持内部状态和store同步
      constructor() {
        super(...arguments);
        this.store();
        this.onChange = this.onChange.bind(this);
      }
      componentDidMount() {
        // 调用订阅方法，没到store状态发生变化后，就调用组件里的onChange方法，驱动组建更新
        this.context.store.subcribe(this.onChange);
      }
      componentWillUnmount() {
        this,context.store.unsubscribe(this.onChange);
      }
      onChange() {
        this.setState({});
      }
      
      render() {
        const store = this.context.store;
        const newProps = {
          ...this.props,
          ...mapStateToProps(store.getState()),
          ...mapDispatchToProps(store.dispatch)
        }
        return <WrappedComponent {...NewpProps} />
      }
    
    };

    
    HOCComponent.contextTypes = {
      store: React.Proptypes.object
    }
  };



}