import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Level2CategoryButton} from '../../../components';
import {setSelectedLevel2Category} from '../../../store/actions/categories';

const Level2Categories = () => {
  const dispatch = useDispatch();
  const flatListRef = React.useRef();

  const {selectedLevel1Category, selectedLevel2Category} = useSelector(
    state => state.categories,
  );
  const {data: level2Categories} = selectedLevel1Category || {};

  const onSelectItem = item => {
    dispatch(setSelectedLevel2Category(item));
  };

  const scrollToTop = () => {
    if (flatListRef) {
      flatListRef.current.scrollToOffset({animated: true, offset: 0});
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [selectedLevel1Category]);

  const keyExtractor = (item, index) => index.toString();

  const renderCategoryCard = ({item}) => {
    const {id, name} = item || {};
    const {id: selectedId} = selectedLevel2Category || {};
    const isSelected = selectedId === id;

    return (
      <Level2CategoryButton
        label={name}
        onPress={() => {
          onSelectItem(item);
        }}
        selected={isSelected}
      />
    );
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        data={level2Categories || []}
        renderItem={renderCategoryCard}
        keyExtractor={keyExtractor}
        horizontal
      />
    </View>
  );
};

export default Level2Categories;
