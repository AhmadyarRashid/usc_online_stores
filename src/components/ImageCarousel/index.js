import PropTypes from 'prop-types';
import React from 'react';
import {Image, TouchableHighlight, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {Components} from '../../styles/colors';
import styles from './styles';

const {container, squareContainer} = styles;

const ImageCarousel = ({
  dataSource,
  onPressImage,
  autoplay,
  square,
  showsPagination,
}) => {
  return (
    <View style={square ? squareContainer : container}>
      <Swiper
        autoplay={autoplay}
        activeDotColor={Components.Icon}
        dotStyle={{width: 20, height: 4}}
        activeDotStyle={{width: 20, height: 4}}
        showsPagination={showsPagination}>
        {dataSource.map(item => {
          const {id, imageURL} = item || {};

          return (
            <TouchableHighlight
              onPress={onPressImage}
              style={{flex: 1}}
              key={id}>
              <Image
                source={{
                  uri: imageURL,
                  cache: 'force-cache',
                }}
                style={{height: '100%', width: '100%'}}
                resizeMode="cover"
              />
            </TouchableHighlight>
          );
        })}
      </Swiper>
    </View>
  );
};

ImageCarousel.propTypes = {
  dataSource: PropTypes.array,
  onPressImage: PropTypes.func,
  autoplay: PropTypes.bool,
  square: PropTypes.bool,
  showsPagination: PropTypes.bool,
};

ImageCarousel.defaultProps = {
  dataSource: [],
  onPressImage: () => {},
  autoplay: false,
  square: false,
  showsPagination: true,
};

export default ImageCarousel;
