import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DefaultInput } from './style';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onChange, placeholder, type } = this.props;
    return (
      <DefaultInput onChange={onChange} placeholder={placeholder} type={type} />
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
