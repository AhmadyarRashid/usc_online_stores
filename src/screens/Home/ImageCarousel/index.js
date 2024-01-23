import PropTypes from 'prop-types';
import React, {useRef} from 'react';
import {TouchableHighlight, View} from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {useSelector} from 'react-redux';
import {SLIDERWIDTH, styles} from './styles';

const {imageContainer, image, cardStyle} = styles;

const ImageCarousel = ({navigation}) => {
  const {homeBannerAdvertisements} = useSelector(state => state.advertisements);

  const carouselRef = useRef(null);

  const onPressCard = item => {
    navigation.navigate('banner_details', {item: item});
  };

  const RenderItem = ({item}, parallaxProps) => {
    const {imageURL} = item || {};

    return (
      <TouchableHighlight
        underlayColor="transparent"
        style={cardStyle}
        onPress={() => onPressCard(item)}>
        <ParallaxImage
          source={{
            uri: imageURL,
            cache: 'force-cache',
          }}
          containerStyle={imageContainer}
          style={image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </TouchableHighlight>
    );
  };

  return (
    <View style={{marginVertical: 15}}>
      <Carousel
        ref={carouselRef}
        sliderWidth={SLIDERWIDTH}
        sliderHeight={SLIDERWIDTH}
        itemWidth={SLIDERWIDTH - 60}
        data={homeBannerAdvertisements}
        renderItem={RenderItem}
        hasParallaxImages={true}
        autoplay
        loop
      />
    </View>
  );
};

ImageCarousel.propTypes = {
  navigation: PropTypes.object,
};

ImageCarousel.defaultProps = {
  navigation: null,
};

export default ImageCarousel;
