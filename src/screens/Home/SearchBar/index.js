import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Components} from '../../../styles/colors';
import {TextStyles} from '../../../styles/text';

const SearchBar = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        marginBottom: 10,
      }}>
      <Text
        style={[
          TextStyles.H1Regular,
          {marginHorizontal: 15, color: Components.Text.Light, fontSize: 16},
        ]}>
        ezmart
      </Text>
      <TouchableHighlight
        underlayColor="transparent"
        style={{flex: 1}}
        onPress={() => navigation.navigate('search')}>
        <View
          style={{
            backgroundColor: 'transparent',
            borderRadius: 25,
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 10,
            borderColor: Components.Background.core,
            borderWidth: StyleSheet.hairlineWidth,
          }}>
          <Ionicons
            name="search"
            size={20}
            color={Components.Background.core}
          />
          <Text
            style={{
              ...TextStyles.H2SemiBold,
              color: Components.Text.Light,
              marginLeft: 10,
              fontSize: 14,
              paddingVertical: 10,
            }}>
            Search for a product
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

SearchBar.propTypes = {
  navigation: PropTypes.object,
};

export default SearchBar;
