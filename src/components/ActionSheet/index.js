import PropTypes from 'prop-types';
import React from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../Button';
import Divider from '../Divider';
import styles from './styles';

const {container, headerContainer, titleTextStyle, itemTextStyle} = styles;

const ActionSheet = ({
  visible,
  title,
  options,
  onSelect,
  selectedItem,
  onPressButton,
  onPressCancel,
}) => {
  const Header = () => (
    <View style={headerContainer}>
      <Text style={titleTextStyle}>{title}</Text>
    </View>
  );

  const RowComponent = ({item}) => {
    const isSelected = item === selectedItem;

    return (
      <TouchableOpacity
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onPress={() => onSelect(item)}>
        <Text style={itemTextStyle}>{item}</Text>
        {isSelected ? (
          <Ionicons name="checkmark" size={30} color="#3AA76D" />
        ) : (
          <View />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={null}
      transparent>
      <TouchableWithoutFeedback style={{flex: 1}} onPress={onPressCancel}>
        <SafeAreaView
          style={{flex: 1, backgroundColor: 'rgba(60, 60, 60, 0.5)'}}
        />
      </TouchableWithoutFeedback>

      <SafeAreaView style={container}>
        <FlatList
          stickyHeaderIndices={[0]}
          data={options}
          renderItem={RowComponent}
          ListHeaderComponent={Header}
          ItemSeparatorComponent={() => <Divider />}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
        <Button
          label="Cancel"
          onPress={onPressButton}
          containerStyle={{margin: 15}}
        />
      </SafeAreaView>
    </Modal>
  );
};

ActionSheet.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  selectedItem: PropTypes.string,
  options: PropTypes.array,
  onSelect: PropTypes.func,
  buttonLabel: PropTypes.string,
  onPressButton: PropTypes.func,
  onPressCancel: PropTypes.func,
};

ActionSheet.defaultProps = {
  visible: false,
  title: 'Title',
  selectedItem: '',
  buttonLabel: 'Cancel',
  options: [],
  onSelect: () => {},
  onPressButton: () => {},
  onPressCancel: () => {},
};

export default ActionSheet;
