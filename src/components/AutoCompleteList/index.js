import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from '../Button';
import CheckBoxLabel from '../CheckBoxLabel';
import Divider from '../Divider';
import TextInput from '../TextInput';
import styles from './styles';

const {container} = styles;

const AutoCompleteList = ({
  visible,
  title,
  data,
  onPress,
  buttonLabel,
  selectedItem,
  onPressButton,
  onPressCancel,
}) => {
  const [filteredOptions, setFilteredOptions] = useState(data);
  const [searchKeyword, setSearchKeyword] = useState();

  const onSearchText = value => {
    setSearchKeyword(value);

    try {
      const trimmedValue = value && value.trim().toLowerCase();

      const filteredList = data.filter(item => {
        const {name} = item || {};

        if (name.toLowerCase().match(trimmedValue)) {
          return item;
        }
      });

      if (!trimmedValue || trimmedValue === '') {
        setFilteredOptions(data);
      }

      if (
        filteredList &&
        Array.isArray(filteredList) &&
        filteredList.length > 0
      ) {
        setFilteredOptions(filteredList);
      }
    } catch (error) {
      setFilteredOptions(data);
    }
  };

  const RowComponent = ({item}) => {
    const {id, name} = item || {};

    const {id: selectedItemId} = selectedItem || {};
    const isSelected = id === selectedItemId;

    return (
      <CheckBoxLabel
        title={name}
        onPress={() => onPress(item)}
        checked={isSelected}
      />
    );
  };

  const RenderItemSeparator = () => <Divider />;

  const keyExtractor = (item, index) => index.toString();

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={null}
      transparent>
      <TouchableWithoutFeedback style={{flex: 1}} onPress={onPressCancel}>
        <SafeAreaView
          style={{flex: 0.3, backgroundColor: 'rgba(60, 60, 60, 0.5)'}}
        />
      </TouchableWithoutFeedback>
      <SafeAreaView style={container}>
        <TextInput
          containerStyle={{marginHorizontal: 10}}
          placeholder={title}
          value={searchKeyword}
          onChangeText={onSearchText}
        />
        <FlatList
          data={filteredOptions}
          renderItem={RowComponent}
          ItemSeparatorComponent={RenderItemSeparator}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
        <Button
          label={buttonLabel}
          onPress={onPressButton}
          containerStyle={{margin: 15}}
        />
      </SafeAreaView>
    </Modal>
  );
};

AutoCompleteList.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  selectedItem: PropTypes.object,
  data: PropTypes.array,
  onPress: PropTypes.func,
  buttonLabel: PropTypes.string,
  onPressButton: PropTypes.func,
  onPressCancel: PropTypes.func,
};

AutoCompleteList.defaultProps = {
  visible: false,
  title: 'Title',
  selectedItem: {},
  buttonLabel: 'DONE',
  data: [],
  onPress: () => {},
  onPressButton: () => {},
  onPressCancel: () => {},
};

export default AutoCompleteList;
