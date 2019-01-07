import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LabeledInput, Wrapper, Label } from './style';

class LabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onChange, placeholder, type, label } = this.props;
    return (
      <Wrapper>
        <Label>{label}</Label>
        <LabeledInput
          onChange={onChange}
          placeholder={placeholder}
          type={type}
        />
      </Wrapper>
    );
  }
}

LabelInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
};

export default LabelInput;
