import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions.js';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <b className="filter selected">{children}</b>;
  } else {
    return (
      <a href="#" className="filter not-selected" onClick={e => {
        e.preventDefault();
        onClick();
      }}>
        {children}
      </a>
    );
  }
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    // 用store中目前filter的状态 和 自身props传进来的filter属性最对比,以此判断是否处于当前过滤类型
    active: state.filter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Link);