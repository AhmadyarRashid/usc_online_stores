import PropTypes from 'prop-types';
import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Components} from '../../../styles/colors';
import {styles} from './styles';

const {titleTextStyle} = styles;

const RowItem = ({label, onPress, showChevronIcon}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={titleTextStyle}>{label}</Text>
        {showChevronIcon ? (
          <Ionicons
            name="chevron-forward"
            size={20}
            color={Components.Text.H3}
            style={{marginHorizontal: 10}}
          />
        ) : (
          <View />
        )}
      </View>
    </TouchableHighlight>
  );
};

RowItem.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  showChevronIcon: PropTypes.bool,
};

RowItem.defaultProps = {
  label: '',
  onPress: () => {},
  showChevronIcon: true,
};

export default RowItem;
