import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SizeUploadButton, Overlay } from './styles';

export default class PhotoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onClick } = this.props;
    return (
      <SizeUploadButton onClick={onClick}>
        <p>사이즈</p>
        <Overlay>등록</Overlay>
      </SizeUploadButton>
    );
  }
}

PhotoUpload.propTypes = {
  onClick: PropTypes.func,
};
