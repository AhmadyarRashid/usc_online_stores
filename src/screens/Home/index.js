import React, {Fragment} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar} from '../../components';
import {Components, Theme} from '../../styles/colors';
import AllCategories from './Allcategories';
import ImageCarousel from './ImageCarousel';
import PrimaryCategories from './PrimaryCategories';
import SearchBar from './SearchBar';

const Home = ({navigation}) => {
  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: Theme.PrimaryColor}}>
        <StatusBar primaryTheme />
        <SearchBar navigation={navigation} />
      </SafeAreaView>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <LinearGradient
            colors={[Theme.PrimaryColor, Components.Background.core]}>
            <ImageCarousel navigation={navigation} />
            <PrimaryCategories navigation={navigation} />
          </LinearGradient>
          <AllCategories navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default Home;
