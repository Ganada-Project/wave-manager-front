import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './style';

class RoundButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onClick } = this.props;
    return <Wrapper onClick={onClick}>{this.props.children}</Wrapper>;
  }
}

RoundButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
};
export default RoundButton;
