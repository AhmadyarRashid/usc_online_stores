import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {Components} from '../../styles/colors';
import {styles} from './styles';

const {containerStyle, titleTextStyle, timeTextStyle} = styles;

const StudioPostCard = ({title, imageURL}) => {
  const timeString = '2 hrs ago';

  return (
    <View style={containerStyle}>
      <Image
        resizeMode="cover"
        style={{
          width: '100%',
          aspectRatio: 1,
          backgroundColor: Components.Background.tint75Percent,
        }}
        source={{
          uri: imageURL,
          cache: 'force-cache',
        }}
      />
      <View style={{marginTop: 5, marginHorizontal: 10}}>
        <Text numberOfLines={10} ellipsizeMode="tail" style={titleTextStyle}>
          {title}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={timeTextStyle}>{timeString}</Text>
        </View>
      </View>
    </View>
  );
};

StudioPostCard.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
};

StudioPostCard.defaultProps = {
  title: '',
  imageURL: null,
};

export default StudioPostCard;
