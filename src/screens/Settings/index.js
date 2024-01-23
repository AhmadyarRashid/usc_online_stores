import React from 'react';
import {Linking, Platform, SafeAreaView, Text, View} from 'react-native';
import Share from 'react-native-share';
import {useSelector} from 'react-redux';
import useUserProfileDocFetch from '../../api/hooks/user/useUserProfileDocFetch';
import {
  ActivityIndicator,
  ConnectionError,
  Divider,
  StatusBar,
} from '../../components';
import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';
import Header from './Header';
import RowItem from './RowItem';

const Settings = ({navigation}) => {
  const {userData} = useSelector(state => state.user);
  const {uid, phoneNumber} = userData || {};
  const {loading, error, onRetry} = useUserProfileDocFetch(uid);

  const isLoggedIn = true;

  const onPressProfile = async () => {
    if (!isLoggedIn) {
      navigation.navigate('login');
    } else if (isLoggedIn) {
      navigation.navigate('settings_user_profile');
    }
  };

  const Profile = () => {
    return (
      <Header
        onPress={onPressProfile}
        loggedIn
        user={!userData ? {name: phoneNumber} : userData}
      />
    );
  };

  const onPressRowItem = route_name => {
    if (!isLoggedIn) {
      navigation.navigate('login');
    } else {
      navigation.navigate(route_name);
    }
  };

  const onPressShare = () => {
    const shareOptions = {
      title: 'ezmart',
      message: 'Share ezmart app with friends',
      url: 'https://play.google.com/store/apps/details?id=app.sangalo.android',
    };

    Share.open(shareOptions)
      .then(res => {})
      .catch(err => {});
  };

  const onPressRateSangalo = () => {
    const GOOGLE_PLAY_URL =
      'https://play.google.com/store/apps/details?id=app.sangalo.android';

    const APP_STORE_URL = 'https://apps.apple.com/us/app/sangalo/id1550242573';

    let URL = GOOGLE_PLAY_URL;

    if (Platform.OS === 'ios') {
      URL = APP_STORE_URL;
    }

    Linking.canOpenURL(URL).then(supported => {
      if (supported) {
        Linking.openURL(URL);
      }
    });
  };

  const onPressAbout = () => {
    navigation.navigate('login');
  };

  const RenderRows = () => {
    return (
      <View>
        <RowItem
          iconName="receipt"
          label="My Orders"
          onPress={() => onPressRowItem('orders')}
        />
        <Divider />
        <RowItem
          iconName="ios-location"
          label="Delivery Address"
          onPress={() => onPressRowItem('settings_address')}
        />
        <Divider />
        <RowItem
          iconName="information-circle"
          label="Contact Us"
          onPress={onPressAbout}
        />
        <Divider />
        <RowItem
          iconName={
            Platform.OS === 'ios'
              ? 'logo-apple-appstore'
              : 'logo-google-playstore'
          }
          label="Feedbacks"
          onPress={onPressRateSangalo}
        />
        <Divider />
        <RowItem iconName="share" label="Share" onPress={onPressShare} />
      </View>
    );
  };

  const RenderAppVersion = () => {
    try {
      const appVersion = '1.0.0';

      return (
        <Text
          style={{
            ...TextStyles.H2Regular,
            margin: 15,
          }}>{`Version  ${appVersion}`}</Text>
      );
    } catch (error) {}

    return <View />;
  };

  return loading ? (
    <ActivityIndicator />
  ) : error ? (
    <ConnectionError onPress={onRetry} />
  ) : (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Components.Background.core}}>
      <StatusBar />
      <View
        style={{flex: 1, backgroundColor: Components.Background.tint75Percent}}>
        <Profile />
        <RenderRows />
        <RenderAppVersion />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
