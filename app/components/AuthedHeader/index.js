import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

// redux
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Wrapper } from './styles';

import { signOutAction } from '../../containers/App/actions';

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
    const { userName } = this.props;
    return (
      <Wrapper>
        <div>{userName}</div>
        <button type="button" onClick={this.onClickSignOut}>
          로그아웃
        </button>
      </Wrapper>
    );
  }
}

AuthedHeader.propTypes = {
  userName: PropTypes.string,
  onClickSignOut: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

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
