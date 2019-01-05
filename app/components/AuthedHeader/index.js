import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

// redux
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Wrapper } from './styles';

import { signOutAction } from '../../containers/App/actions';
import { makeSelectUserData } from '../../containers/App/selectors';

class AuthedHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickSignOut = () => {
    const { onClickSignOut } = this.props;
    onClickSignOut();
  };

  render() {
    const { userData } = this.props;
    return (
      <Wrapper>
        <div>{userData.get('brand_name')}</div>
        <button type="button" onClick={this.onClickSignOut}>
          로그아웃
        </button>
      </Wrapper>
    );
  }
}

AuthedHeader.propTypes = {
  onClickSignOut: PropTypes.func,
  userData: PropTypes.instanceOf(Object),
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
)(AuthedHeader);
