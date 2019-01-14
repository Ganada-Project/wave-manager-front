import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

// redux
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavigationHeaderWrapper } from './styles';

import RoundButton from '../RoundButton';
import { signOutAction } from '../../containers/App/actions';
import { makeSelectUserData } from '../../containers/App/selectors';

class NavigationHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickSignOut = () => {
    const { onClickSignOut } = this.props;
    onClickSignOut();
  };

  render() {
    const { onClickRight, rightButtonText, headerTitle } = this.props;
    return (
      <NavigationHeaderWrapper>
        <div>{headerTitle}</div>
        <RoundButton onClick={onClickRight}>{rightButtonText}</RoundButton>
      </NavigationHeaderWrapper>
    );
  }
}

NavigationHeader.propTypes = {
  onClickSignOut: PropTypes.func,
  onClickRight: PropTypes.func,
  rightButtonText: PropTypes.string,
  headerTitle: PropTypes.string,
  // userData: PropTypes.instanceOf(Object),
};

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
});

const mapDispatchToProps = dispatch => ({
  onClickSignOut: () => dispatch(signOutAction()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withConnect,
  withRouter,
)(NavigationHeader);
