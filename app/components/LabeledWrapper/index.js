import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Label, Content } from './styles';

class LabeledWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, label } = this.props;
    return (
      <Wrapper>
        <Label>{label}</Label>
        <Content>{children}</Content>
      </Wrapper>
    );
  }
}

LabeledWrapper.propTypes = {
  label: PropTypes.string,
  children: PropTypes.element,
};

export default LabeledWrapper;
