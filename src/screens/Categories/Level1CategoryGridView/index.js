import PropTypes from 'prop-types';
import React from 'react';
import {FlatList, Image, Text, TouchableHighlight, View} from 'react-native';
import {styles} from './styles';

const {
  container,
  cardStyle,
  imageContainer,
  imageStyle,
  labelTextStyle,
} = styles;

const Level1CategoryGridView = ({data, navigation}) => {
  const keyExtractor = (item, index) => index;

  const onPressCategoryCard = item => {
    const {name, id} = item || {};

    navigation.navigate('product_list_sub_categories', {
      name: name,
      level2CategoryId: id,
    });
  };

  const renderCategoryCard = ({item}) => {
    const {name, imageURL} = item || {};

    let title = name;
    try {
      title = title && title.toUpperCase();
    } catch (error) {}

    return (
      <View style={{flex: 1 / 3}}>
        <View style={cardStyle}>
          <TouchableHighlight
            style={imageContainer}
            underlayColor="transparent"
            onPress={() => onPressCategoryCard(item)}>
            <Image
              resizeMode="cover"
              source={{uri: imageURL, cache: 'force-cache'}}
              style={imageStyle}
            />
          </TouchableHighlight>
          <Text numberOfLines={1} ellipsizeMode="tail" style={labelTextStyle}>
            {title}
          </Text>
        </View>
      </View>
    );
  };

  const RenderFooter = () => <View style={{margin: 5}} />;

  return (
    <View style={container}>
      <FlatList
        style={{flex: 1}}
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderCategoryCard}
        keyExtractor={keyExtractor}
        ListFooterComponent={RenderFooter}
        numColumns={3}
      />
    </View>
  );
};

Level1CategoryGridView.propTypes = {
  data: PropTypes.array,
  header: PropTypes.string,
};

Level1CategoryGridView.defaultProps = {
  data: [],
  header: '',
};

export default Level1CategoryGridView;
