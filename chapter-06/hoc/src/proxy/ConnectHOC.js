import React from 'react';

const doNothing = () => ({});

function connect(mapStateToProps=doNothing, mapDispatchToProps=doNothing) {

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component';
  }

  return function(WrappedComponent) {
    class HOCComponent extends React.Component {
      constructor() {
        super(...arguments);

        this.onChange = this.onChange.bind(this);

        this.store = {};
      }

      //TODO: make a workable shouldComponentUpdate
      shouldComponentUpdate(nextProps, nextState) {
        for (const propType in nextProps) {
          // 如果当前的属性（context申请到的store属性）是nextProps中自带的非继承属性
          if (nextProps.hasOwnProperty(propType)) {
            // 并且这个新的属性没有改变
            if (nextProps[propType] === this.props[propType]) {
              // 那么不应该更新组件
              return false;
            }
          }
        }

        for (const propType in this.props) {
          if (this.props.hasOwnProperty(propType)) {
            if (nextProps[propType] === this.props[propType]) {
              return false;
            }
          }
        }

        return true;
      }

      componentDidMount() {
        this.context.store.subscribe(this.onChange);
      }

      componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange);
      }

      onChange() {
        this.setState({});
      }

      render() {
        const store = this.context.store;
        const newProps = {
          ...this.props,
          ...mapStateToProps(store.getState(), this.props),
          ...mapDispatchToProps(store.dispatch, this.props)
        }

        return <WrappedComponent {...newProps} />;
      }
    };

    HOCComponent.contextTypes = {
      store: React.PropTypes.object
    }

    HOCComponent.displayName = `Connect(${getDisplayName(WrappedComponent)})`;

    return HOCComponent;
  };
}

export default connect;


