import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import {ImageViewerComponent} from '../../../components';

const ImageViewer = ({visible, onPressClose, images}) => {
  let updatedImages = [];

  if (images && Array.isArray(images) && images.length > 0) {
    updatedImages = images.map(image => {
      return {url: image};
    });
  }

  if (updatedImages.length === 0) {
    return <View />;
  }

  return (
    <ImageViewerComponent
      visible={visible}
      onPressClose={onPressClose}
      imageUrls={updatedImages}
    />
  );
};

ImageViewer.propTypes = {
  visible: PropTypes.bool,
  images: PropTypes.array,
  onPressClose: PropTypes.func,
};

ImageViewer.defaultProps = {
  visible: false,
  images: [],
  onPressClose: () => {},
};

export default ImageViewer;
