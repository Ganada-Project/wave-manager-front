import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Logo from './Logo-Web.png';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const { isAuth } = this.props;
    return (
      <div>
        <NavBar isAuth={isAuth}>
          <img src={Logo} style={{ height: 40 }} alt="navBar-logo" />
          {isAuth ? null : (
            <HeaderLink to="/signIn">
              <FormattedMessage {...messages.signIn} />
            </HeaderLink>
          )}
        </NavBar>
      </div>
    );
  }
}

Header.propTypes = {
  isAuth: PropTypes.bool,
};

export default Header;
