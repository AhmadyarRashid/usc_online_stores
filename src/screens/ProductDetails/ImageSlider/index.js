import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {View} from 'react-native';
import {ImageCarousel} from '../../../components';
import ImageViewer from '../ImageViewer';

const ImageSlider = ({product}) => {
  const [isImageViewerVisible, showImageViewer] = useState();
  const {images} = product || {};

  const {image_1, image_2, image_3, image_4, image_5} = images || {};
  const imageArray = [image_1, image_2, image_3, image_4, image_5];

  let imagesForSlider = [];
  let imagesForImageViewer = [];

  imageArray.forEach((image, index) => {
    if (image) {
      imagesForSlider.push({id: index, imageURL: image});
      imagesForImageViewer.push(image);
    }
  });

  const onPressImage = () => {
    showImageViewer(true);
  };

  return (
    <View>
      <ImageCarousel
        square
        dataSource={imagesForSlider}
        onPressImage={onPressImage}
      />
      <ImageViewer
        visible={isImageViewerVisible}
        onPressClose={() => showImageViewer(false)}
        images={imagesForImageViewer}
      />
    </View>
  );
};

ImageSlider.propTypes = {
  product: PropTypes.object,
  selectedVariant: PropTypes.object,
};

export default ImageSlider;
