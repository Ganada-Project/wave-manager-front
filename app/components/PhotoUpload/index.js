import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FileInputComponent from 'react-file-input-previews-base64';
import { PhotoUploadButton, Overlay, PreviewWrapper } from './styles';

export default class PhotoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleBase, title, index, preview } = this.props;
    return (
      <FileInputComponent
        multiple={false}
        parentStyle={{
          marginRight: index % 4 === 3 ? 0 : 10,
          marginBottom: 10,
          width: 'calc(100% / 5)',
          marginTop: 0,
        }}
        labelStyle={{ display: 'none', margin: 0 }}
        imagePreview={false}
        buttonComponent={
          preview ? (
            <PreviewWrapper index={index}>
              <img
                src={preview}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  borderRadius: 10,
                }}
                alt={`preview-img-${index}`}
              />
            </PreviewWrapper>
          ) : (
            <PhotoUploadButton>
              <p>{title}</p>
              <Overlay>등록</Overlay>
            </PhotoUploadButton>
          )
        }
        callbackFunction={handleBase}
        accept="image/*"
      />
    );
  }
}

PhotoUpload.propTypes = {
  handleBase: PropTypes.func,
  title: PropTypes.string,
  index: PropTypes.number,
  preview: PropTypes.string,
};
