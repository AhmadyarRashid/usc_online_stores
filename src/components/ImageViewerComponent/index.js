import PropTypes from 'prop-types';
import React from 'react';
import {ActivityIndicator, Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Components} from '../../styles/colors';

const ImageViewerComponent = ({visible, onPressClose, imageUrls}) => {
  const RenderActivityIndicator = () => (
    <ActivityIndicator color={Components.Background.core} size="large" />
  );

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <ImageViewer
        enableSwipeDown
        onSwipeDown={onPressClose}
        imageUrls={imageUrls}
        saveToLocalByLongPress={false}
        loadingRender={RenderActivityIndicator}
      />
    </Modal>
  );
};

ImageViewerComponent.propTypes = {
  visible: PropTypes.bool,
  onPressClose: PropTypes.func,
  imageUrls: PropTypes.array,
};

ImageViewerComponent.defaultProps = {
  visible: false,
  onPressClose: () => {},
  imageUrls: [],
};

export default ImageViewerComponent;
