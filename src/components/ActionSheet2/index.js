import PropTypes from 'prop-types';
import React from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Button from '../Button';
import CheckBoxLabel from '../CheckBoxLabel';
import Divider from '../Divider';
import styles from './styles';

const {container, headerContainer, titleTextStyle} = styles;

const ActionSheet = ({
  visible,
  title,
  options,
  onPress,
  selectedItem,
  selectedItems,
  onPressButton,
  onPressCancel,
  multiSelect,
}) => {
  const Header = () => (
    <View style={headerContainer}>
      <Text style={titleTextStyle}>{title}</Text>
    </View>
  );

  const RowComponent = ({item}) => {
    const {id, name} = item || {};

    let isSelected = false;

    if (
      multiSelect &&
      Array.isArray(selectedItems) &&
      selectedItems.length > 0
    ) {
      isSelected = selectedItems.some(element => {
        const {id: selectedItemId} = element || {};

        if (selectedItemId === id) {
          return true;
        }
      });
    } else {
      const {id: selectedItemId} = selectedItem || {};
      isSelected = id === selectedItemId;
    }

    return (
      <CheckBoxLabel
        title={name}
        onPress={() => onPress(item)}
        checked={isSelected}
      />
    );
  };

  const RenderItemSeparator = () => <Divider />;

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
          ItemSeparatorComponent={RenderItemSeparator}
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
  multiSelect: PropTypes.bool,
  title: PropTypes.string,
  selectedItem: PropTypes.object,
  selectedItems: PropTypes.array,
  options: PropTypes.array,
  onPress: PropTypes.func,
  buttonLabel: PropTypes.string,
  onPressButton: PropTypes.func,
  onPressCancel: PropTypes.func,
};

ActionSheet.defaultProps = {
  visible: false,
  multiSelect: false,
  title: 'Title',
  selectedItem: {},
  selectedItems: [],
  buttonLabel: 'Cancel',
  options: [],
  onPress: () => {},
  onPressButton: () => {},
  onPressCancel: () => {},
};

export default ActionSheet;
