import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { push, replace } from 'connected-react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import DashboardPage from './index';

import { LeftNavigation, AuthedHeader } from '../../components';
import { makeSelectIdToken } from '../App/selectors';

class DashboardPageRouter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <AuthedHeader />
        <LeftNavigation />
        <Switch>
          <Route exact path={this.props.match.path} component={DashboardPage} />
        </Switch>
      </Fragment>
    );
  }
}

DashboardPageRouter.propTypes = {
  match: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  pushUrl: nextUrl => dispatch(push(nextUrl)),
  replaceUrl: nextUrl => dispatch(replace(nextUrl)),
});
const mapStateToProps = createStructuredSelector({
  idToken: makeSelectIdToken(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DashboardPageRouter);
