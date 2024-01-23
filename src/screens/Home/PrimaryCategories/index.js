import PropTypes from 'prop-types';
import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {PrimaryCategoryButton} from '../../../components';

const PrimaryCategories = ({navigation}) => {
  const {homeLevel1Categories} = useSelector(state => state.categories);
  const keyExtractor = (item, index) => index.toString();

  const onPressPrimaryCategoryButton = item => {
    const {name, id} = item || {};

    navigation.navigate('product_list_sub_categories', {
      name: name,
      level1CategoryId: id,
    });
  };

  const renderCategoryCard = ({item}) => {
    const {imageURL, name, bgColor} = item || {};

    return (
      <PrimaryCategoryButton
        item={item}
        imageUrl={imageURL}
        label={name}
        backgroundColor={bgColor}
        onPress={() => onPressPrimaryCategoryButton(item)}
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={{paddingVertical: 5}}
      showsHorizontalScrollIndicator={false}
      data={homeLevel1Categories}
      renderItem={renderCategoryCard}
      removeClippedSubviews={false}
      keyExtractor={keyExtractor}
      horizontal
    />
  );
};

PrimaryCategories.propTypes = {
  navigation: PropTypes.object,
};

export default PrimaryCategories;
