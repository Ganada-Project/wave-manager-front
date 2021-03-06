import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DefaultInput, InputWrapper } from './style';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onChange, placeholder, type } = this.props;
    return (
      <InputWrapper>
        <DefaultInput
          onChange={onChange}
          placeholder={placeholder}
          type={type}
        />
      </InputWrapper>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
