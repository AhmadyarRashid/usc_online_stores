import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import Level1CategoryGridView from '../../../screens/Categories/Level1CategoryGridView';

const AllCategories = ({navigation}) => {
  const {categories} = useSelector(state => state.categories);

  return (
    <View style={{marginTop: 5}}>
      {categories &&
        Array.isArray(categories) &&
        categories.map(item => {
          const {data, name, id} = item || {};

          if (!data || (data && Array.isArray(data) && data.length === 0)) {
            return <View key={`${id}_${name}`} />;
          }

          return (
            <Level1CategoryGridView
              data={data}
              header={name}
              navigation={navigation}
              key={`${id}_${name}`}
            />
          );
        })}
    </View>
  );
};

AllCategories.propTypes = {
  navigation: PropTypes.object,
};

AllCategories.defaultProps = {
  navigation: null,
};

export default AllCategories;
