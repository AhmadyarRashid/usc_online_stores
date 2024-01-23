import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {StatusBar} from '../../components';
import {Components} from '../../styles/colors';
import AddToCartButton from './AddToCartButton';
import ImageSlider from './ImageSlider';
import Price from './Price';
import Recommendations from './Recommendations';
import {styles} from './styles';

const {
  titleStyle,
  subTitleTextStyle,
  descriptionTextStyle,
  cardContainerStyle,
} = styles;

const ProductDetails = ({navigation, route}) => {
  const {item, disableRecommendations} = route.params || {};
  const {id: productId, title, keywords, description, countryOfOrigin} =
    item || {};

  const RenderTitle = () => {
    return (
      <Text style={titleStyle} numberOfLines={3} ellipsizeMode="tail">
        {title}
      </Text>
    );
  };

  const Description = () => {
    if (!description) {
      return <View />;
    }

    return (
      <View style={[cardContainerStyle, {marginBottom: 0}]}>
        <Text style={subTitleTextStyle}>Description</Text>
        <Text style={descriptionTextStyle}>{description}</Text>
      </View>
    );
  };

  const RenderCountryOfOrigin = () => {
    if (countryOfOrigin) {
      return (
        <View style={cardContainerStyle}>
          <Text style={subTitleTextStyle}>Country of Origin</Text>
          <Text style={descriptionTextStyle}>{countryOfOrigin}</Text>
        </View>
      );
    }

    return <View style={cardContainerStyle} />;
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Components.Background.core}}>
      <StatusBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: Components.Background.tint75Percent}}>
        <ImageSlider product={item} />
        <View
          style={{
            backgroundColor: Components.Background.core,
            padding: 10,
            marginBottom: 5,
          }}>
          <RenderTitle />
          <Price product={item} />
        </View>
        <Description />
        <RenderCountryOfOrigin />
        {disableRecommendations ? (
          <View />
        ) : (
          <Recommendations
            navigation={navigation}
            keywords={keywords}
            productId={productId}
          />
        )}
      </ScrollView>
      <AddToCartButton navigation={navigation} product={item} />
    </SafeAreaView>
  );
};

export default ProductDetails;
