import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, SavedAddress, StatusBar} from '../../components';
import {
  removeAddressItem,
  updateAddressItem,
} from '../../store/actions/addressList';
import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';
import {styles} from './styles';

const AddressImage = require('../../../assets/images/illustration_address.png');
const {buttonTextStyle, titleTextStyle, subTitleTextStyle} = styles;

const Address = ({navigation}) => {
  const dispatch = useDispatch();
  const {addressList} = useSelector(state => state.addressList);
  const [loading, setLoading] = useState();
  const [removing, setRemoving] = useState();
  const [refreshing, setRefreshing] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onPressAddNewAddress}>
          <Text
            style={[
              TextStyles.H1SemiBold,
              {paddingHorizontal: 10},
              buttonTextStyle,
            ]}>
            + NEW ADDRESS
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    async function fetchDataFromServer() {
      setLoading(true);
      await fetchData();
      setLoading(false);
    }

    fetchDataFromServer();
  }, []);

  const fetchData = async () => {};

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  const onPressRemove = async item => {
    if (removing) {
      return;
    }

    setRemoving(true);
    dispatch(removeAddressItem(item));
    setRemoving(false);
  };

  const onPressSetAsDefault = async item => {
    if (removing) {
      return;
    }

    setRemoving(true);

    let previousDefaultAddress = null;

    if (addressList && Array.isArray(addressList) && addressList.length > 0) {
      addressList.forEach(el => {
        const {isDefault} = el || {};

        if (isDefault) {
          previousDefaultAddress = el;
        }
      });
    }

    try {
      dispatch(updateAddressItem({...item, isDefault: true}));
      if (previousDefaultAddress) {
        dispatch(
          updateAddressItem({...previousDefaultAddress, isDefault: false}),
        );
      }
    } catch (error) {}

    setRemoving(false);
  };

  const onPressAddNewAddress = () => {
    navigation.navigate('settings_new_address');
  };

  const RenderEmptyAddress = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: Components.Background.core,
        }}>
        <Image
          source={AddressImage}
          style={{height: '60%', width: '80%', alignSelf: 'center'}}
          resizeMode="contain"
        />
        <Text style={titleTextStyle}>Saved Address is Empty</Text>
        <Text style={subTitleTextStyle}>
          Looks like you haven't saved any delivery address yet
        </Text>
      </View>
    );
  };

  const keyExtractor = (item, index) => index.toString();

  const renderRowItem = ({item}) => {
    return (
      <SavedAddress
        editable
        data={item}
        onPressSetAsDefault={() => onPressSetAsDefault(item)}
        onPressRemove={() => onPressRemove(item)}
      />
    );
  };

  return loading ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Components.Background.core}}>
      <StatusBar />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{backgroundColor: Components.Background.tint75Percent}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        data={addressList}
        renderItem={renderRowItem}
        removeClippedSubviews={false}
        keyExtractor={keyExtractor}
        ListEmptyComponent={RenderEmptyAddress}
      />
    </SafeAreaView>
  );
};

export default Address;
