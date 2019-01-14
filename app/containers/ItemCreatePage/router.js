import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { push, replace } from 'connected-react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import ItemCreatePage from './index';
import ItemCreateSizePage from '../ItemCreateSizePage';

import { LeftNavigation } from '../../components';
import { makeSelectIdToken } from '../App/selectors';

class ItemCreateRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <LeftNavigation />
        <Switch>
          <Route
            exact
            path={this.props.match.path}
            component={ItemCreatePage}
          />
          <Route
            path={`${this.props.match.path}/size`}
            component={ItemCreateSizePage}
          />
        </Switch>
      </Fragment>
    );
  }
}

ItemCreateRouter.propTypes = {
  // pushUrl: PropTypes.func,
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

export default compose(withConnect)(ItemCreateRouter);
