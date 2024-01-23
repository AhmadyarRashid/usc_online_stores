import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Divider, StatusBar} from '../../components';
import {Components} from '../../styles/colors';
import Level1Categories from './Level1Categories';
import Level2Categories from './Level2Categories';
import Products from './Products';

const Categories = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Components.Background.core}}>
      <StatusBar />
      <Level1Categories />
      <Divider />
      <Level2Categories />
      <Divider />
      <View style={{flexDirection: 'row', flex: 1}}>
        <Products navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Categories;
