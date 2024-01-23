import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {ActivityIndicator, StatusBar, StudioPostCard} from '../../components';
import {Components} from '../../styles/colors';
import {styles} from './styles';

const {container, headerContainerStyle, headerTextStyle} = styles;

const Studio = () => {
  const [loading, setLoading] = useState();

  useEffect(() => {
    async function fetchDataFromServer() {
      setLoading(true);
      await new Promise(r => setTimeout(r, 2000));
      setLoading(false);
    }

    fetchDataFromServer();
  }, []);

  const keyExtractor = (item, index) => index.toString();

  const renderPostFeedCard = ({item}) => {
    const {title, updatedAt, imageURL} = item || {};

    return (
      <View style={{marginBottom: 5}}>
        <StudioPostCard title={title} time={updatedAt} imageURL={imageURL} />
      </View>
    );
  };

  return loading ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView style={container}>
      <StatusBar />
      <View style={headerContainerStyle}>
        <Text style={headerTextStyle}>Posts</Text>
      </View>
      <FlatList
        style={{
          backgroundColor: Components.Background.tint75Percent,
        }}
        showsVerticalScrollIndicator={false}
        data={PostsData || []}
        renderItem={renderPostFeedCard}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Studio;

const PostsData = [
  {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et. Vulputate sapien nec sagittis aliquam malesuada bibendum. Dolor sit amet consectetur adipiscing elit. Aliquet porttitor lacus luctus accumsan. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt.',
    active: true,
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fposts%2Fpost_1.jpeg?alt=media&token=b11ca458-900f-4b7b-b633-84125fcdc63c',
    id: 'iqOOm6IBf5tqUlF58pJw',
    updatedAt: {
      seconds: 1617844173,
      nanoseconds: 691000000,
    },
  },
  {
    title:
      'Interdum consectetur libero id faucibus. Proin sed libero enim sed faucibus turpis. Non diam phasellus vestibulum lorem. Integer feugiat scelerisque varius morbi. Malesuada pellentesque elit eget gravida cum sociis natoque. Hac habitasse platea dictumst quisque. Consectetur lorem donec massa sapien faucibus et molestie. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Massa sed elementum tempus egestas. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Purus in massa tempor nec. Velit scelerisque in dictum non consectetur a erat nam at.',
    active: true,
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fposts%2Fpost_3.jpeg?alt=media&token=5ef4b005-e6b8-47a9-9cdf-ffe79b64c3fd',
    id: '1O2oQKxSaXI3HfOtjneo',
    updatedAt: {
      seconds: 1617844169,
      nanoseconds: 436000000,
    },
  },
  {
    title:
      'Consequat nisl vel pretium lectus quam id. Auctor eu augue ut lectus arcu bibendum at. Eget felis eget nunc lobortis mattis aliquam. Lectus vestibulum mattis ullamcorper velit. Massa vitae tortor condimentum lacinia quis. Sed risus pretium quam vulputate dignissim suspendisse in est ante.',
    active: true,
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fposts%2Fpost_2.jpg?alt=media&token=33ecf0ab-b7e1-491e-9501-a3476052089a',
    id: 'rWPyL1B7txziQDCZkPjY',
    updatedAt: {
      seconds: 1617844164,
      nanoseconds: 170000000,
    },
  },
];
