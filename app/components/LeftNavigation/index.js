import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router';
// redux
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Wrapper, Header, Body, MenuList } from './styles';

const config = [
  {
    title: '대시보드',
    route: '/dashboard',
  },
  {
    title: '상품',
    route: '/items',
  },
];

class LeftNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleConfig = data => () => {
    const { pushUrl } = this.props;
    pushUrl(data.route);
  };

  render() {
    const curPathname = window.location.pathname;
    const curUrl = curPathname.split('/')[1];
    return (
      <Wrapper>
        <Header />
        <Body>
          {config.map(data => (
            <MenuList
              key={data.route}
              curUrl={`/${curUrl}`}
              route={data.route}
              onClick={this.handleConfig(data)}
            >
              {data.title}
            </MenuList>
          ))}
        </Body>
      </Wrapper>
    );
  }
}

LeftNavigation.propTypes = {
  pushUrl: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
  pushUrl: nextUrl => dispatch(push(nextUrl)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
)(LeftNavigation);
