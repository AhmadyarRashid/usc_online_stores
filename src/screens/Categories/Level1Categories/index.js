import React from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {PrimaryCategoryButton} from '../../../components';
import {setSelectedLevel1Category} from '../../../store/actions/categories';

const Level1Categories = () => {
  const dispatch = useDispatch();
  const {categories, selectedLevel1Category} = useSelector(
    state => state.categories,
  );

  const onSelectItem = item => {
    dispatch(setSelectedLevel1Category(item));
  };

  const keyExtractor = (item, index) => index.toString();

  const renderCategoryCard = ({item}) => {
    const {id, imageURL, name, bgColor} = item || {};
    const {id: selectedId} = selectedLevel1Category || {};
    const isSelected = selectedId === id;

    return (
      <PrimaryCategoryButton
        imageUrl={imageURL}
        label={name}
        backgroundColor={bgColor}
        onPress={() => onSelectItem(item)}
        selected={isSelected}
      />
    );
  };

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={categories || []}
        renderItem={renderCategoryCard}
        keyExtractor={keyExtractor}
        horizontal
      />
    </View>
  );
};

export default Level1Categories;
