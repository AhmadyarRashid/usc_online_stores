import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {
  ActivityIndicator,
  ConnectionError,
  ProductCardHorizontal,
} from '../../../components';
import {IMAGEWIDTH, styles} from './styles';

const {container} = styles;

const Products = ({navigation}) => {
  const {
    selectedLevel1Category,
    selectedLevel2Category,
    selectedLevel3Category,
  } = useSelector(state => state.categories);

  const {id: level1CategoryId} = selectedLevel1Category || {};
  const {id: level2CategoryId} = selectedLevel2Category || {};
  const {id: level3CategoryId} = selectedLevel3Category || {};

  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchDataFromServer() {
      setLoading(true);
      await new Promise(r => setTimeout(r, 2000));
      setLoading(false);
    }

    fetchDataFromServer();
  }, [level1CategoryId, level2CategoryId, level3CategoryId]);

  const keyExtractor = (item, index) => index.toString();

  const renderProductCard = ({item}) => {
    return (
      <ProductCardHorizontal
        productInfo={item}
        imageViewStyle={{height: IMAGEWIDTH, width: IMAGEWIDTH}}
        onPress={() => navigation.navigate('product_details', {item: item})}
      />
    );
  };

  return (
    <View style={container}>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      ) : error ? (
        <ConnectionError hideButton />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ProductsData}
          renderItem={renderProductCard}
          removeClippedSubviews={false}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
};

Products.propTypes = {
  navigation: PropTypes.object,
};

export default Products;

const ProductsData = [
  {
    brand: 'Britannia',
    level1CategoryId: 'uDSixaTvc6vWapWJn7vi',
    countryOfOrigin: null,
    keywords: [],
    level2CategoryId: 'gmYgDPAqFAf0n3iNXwcP',
    isGroupParent: true,
    title: `BARILLA Premium Pasta Sauce Variety Pack Tomato & Basil and Traditional Tomato, 24 Ounce Jar (Pack of 4) - No Added Sugar, Artificial Colors, Flavors, or Preservatives - Non-GMO, Gluten Free, Kosher`,
    active: true,
    marketPrice: 195,
    sellingPrice: 185,
    images: {
      image_0:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F04%2F1.jpg?alt=media&token=414fde73-68e9-4700-87d9-988984ffb130',
      image_1:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F04%2F1.jpg?alt=media&token=414fde73-68e9-4700-87d9-988984ffb130',
      image_2:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F04%2F3.jpg?alt=media&token=a2aaaa3f-6ab7-4581-a92f-1524bd7b33eb',
      image_3:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F04%2F2.jpg?alt=media&token=8fce33f9-73de-4e57-963f-99ada954022b',
    },
    quantity: 20,
    updatedAt: {seconds: 1614870867, nanoseconds: 103000000},
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare. Consectetur lorem donec massa sapien faucibus et molestie. Massa eget egestas purus viverra accumsan in nisl nisi. Cras ornare arcu dui vivamus arcu. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Tellus cras adipiscing enim eu. Accumsan in nisl nisi scelerisque. Imperdiet nulla malesuada pellentesque elit eget gravida. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Mollis nunc sed id semper risus in. Feugiat sed lectus vestibulum mattis. Dignissim cras tincidunt lobortis feugiat. Fermentum et sollicitudin ac orci phasellus egestas. Risus commodo viverra maecenas accumsan. Non blandit massa enim nec dui nunc. In eu mi bibendum neque.`,
    id: 'Ln0GhcBpGg5pVc4vTjKE',
  },
  {
    brand: null,
    level1CategoryId: 'uDSixaTvc6vWapWJn7vi',
    countryOfOrigin: 'Spain',
    keywords: [],
    level2CategoryId: 'NsLNuTsxQjcCIhP3NkPM',
    isGroupParent: true,
    title:
      'Cheez-It Original Baked Snack Cheese Crackers - Single Serve School Lunch Snacks (Case contains 40 Count)',
    active: true,
    marketPrice: 2500,
    sellingPrice: 2000,
    images: {
      image_0:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F02%2F1.jpg?alt=media&token=5eecaecf-1fff-41c0-91cd-03a2453a2329',
      image_1:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F02%2F1.jpg?alt=media&token=5eecaecf-1fff-41c0-91cd-03a2453a2329',
      image_2:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F02%2F2.jpg?alt=media&token=6006cfc4-c3c9-48ca-b79a-da9594dbe2b4',
      image_3:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F02%2F3.jpg?alt=media&token=ba211a33-d17f-4e3f-9209-2687c64dee94',
    },
    quantity: 6,
    id: '5CqvJS2ldihL6BxwRsQa',
    updatedAt: {seconds: 1614904851, nanoseconds: 254000000},
    description: `Ligula ullamcorper malesuada proin libero nunc. Orci phasellus egestas tellus rutrum tellus. Ut pharetra sit amet aliquam id diam maecenas ultricies. Arcu risus quis varius quam quisque id diam vel. Nunc consequat interdum varius sit amet mattis vulputate. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Tincidunt eget nullam non nisi est sit amet facilisis. Velit dignissim sodales ut eu. Molestie at elementum eu facilisis sed. Amet consectetur adipiscing elit ut aliquam. Nulla aliquet porttitor lacus luctus accumsan. Ut ornare lectus sit amet est placerat in egestas erat.

Magnis dis parturient montes nascetur ridiculus mus. Urna porttitor rhoncus dolor purus non enim praesent elementum. Integer feugiat scelerisque varius morbi enim nunc faucibus. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Integer eget aliquet nibh praesent. Augue lacus viverra vitae congue eu consequat. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Volutpat lacus laoreet non curabitur. Odio euismod lacinia at quis risus sed. Sollicitudin ac orci phasellus egestas tellus. Quisque sagittis purus sit amet volutpat consequat mauris. Non tellus orci ac auctor augue mauris augue. Tellus pellentesque eu tincidunt tortor.`,
  },
  {
    brand: null,
    id: 'eX9IbZSDT0pxRucpVbzz',
    level1CategoryId: 'uDSixaTvc6vWapWJn7vi',
    countryOfOrigin: 'Germany',
    keywords: [],
    level2CategoryId: 'gmYgDPAqFAf0n3iNXwcP',
    isGroupParent: true,
    title:
      'Kedem Sparkling 100% Concord Grape Juice, 25.4oz (2 Pack), Kosher, Non Alcoholic, No Added Sugar',
    active: true,
    marketPrice: 50,
    sellingPrice: 50,
    images: {
      image_0:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F06%2F1.jpg?alt=media&token=62dfcd3e-46b2-48c6-9dac-8e624d28667e',
      image_1:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F06%2F1.jpg?alt=media&token=62dfcd3e-46b2-48c6-9dac-8e624d28667e',
    },
    quantity: 20,
    updatedAt: {seconds: 1614870659, nanoseconds: 710000000},
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare. Consectetur lorem donec massa sapien faucibus et molestie. Massa eget egestas purus viverra accumsan in nisl nisi. Cras ornare arcu dui vivamus arcu. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Tellus cras adipiscing enim eu. Accumsan in nisl nisi scelerisque. Imperdiet nulla malesuada pellentesque elit eget gravida. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Mollis nunc sed id semper risus in. Feugiat sed lectus vestibulum mattis. Dignissim cras tincidunt lobortis feugiat. Fermentum et sollicitudin ac orci phasellus egestas. Risus commodo viverra maecenas accumsan. Non blandit massa enim nec dui nunc. In eu mi bibendum neque.`,
  },
  {
    brand: 'Parle',
    id: 'YVK9UDAVWhIqppegH9eW',
    level1CategoryId: 'uDSixaTvc6vWapWJn7vi',
    countryOfOrigin: 'USA',
    keywords: [],
    level2CategoryId: 'gmYgDPAqFAf0n3iNXwcP',
    isGroupParent: true,
    title: `
    Mooala – Organic Original Bananamilk, 1L (Pack of 6) – Shelf-Stable, Non-Dairy, Nut-Free, Gluten-Free, Plant-Based Beverage with No Added Sugar`,
    active: true,
    marketPrice: 400,
    sellingPrice: 380,
    images: {
      image_0:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F07%2F1.jpg?alt=media&token=3b5b1041-0a9e-4766-9602-f324cb15f2c0',
      image_1:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F07%2F1.jpg?alt=media&token=3b5b1041-0a9e-4766-9602-f324cb15f2c0',
      image_2:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F07%2F2.jpg?alt=media&token=a8088c81-c94c-4995-857a-1ba0c720530c',
    },
    quantity: 20,
    updatedAt: {seconds: 1614870648, nanoseconds: 633000000},
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare. Consectetur lorem donec massa sapien faucibus et molestie. Massa eget egestas purus viverra accumsan in nisl nisi. Cras ornare arcu dui vivamus arcu. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Tellus cras adipiscing enim eu. Accumsan in nisl nisi scelerisque. Imperdiet nulla malesuada pellentesque elit eget gravida. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Mollis nunc sed id semper risus in. Feugiat sed lectus vestibulum mattis. Dignissim cras tincidunt lobortis feugiat. Fermentum et sollicitudin ac orci phasellus egestas. Risus commodo viverra maecenas accumsan. Non blandit massa enim nec dui nunc. In eu mi bibendum neque.`,
  },
  {
    brand: null,
    level1CategoryId: 'uDSixaTvc6vWapWJn7vi',
    countryOfOrigin: 'India',
    keywords: [],
    level2CategoryId: 'gmYgDPAqFAf0n3iNXwcP',
    isGroupParent: true,
    title:
      'Pintola All Natural Peanut Butter (Crunchy) | Unsweetened | 30g Protein | Non GMO | Gluten Free | Vegan | Cholesterol Free (1kg)',
    active: true,
    marketPrice: 425,
    sellingPrice: 377,
    quantity: 20,
    images: {
      image_0:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F01%2F1.png?alt=media&token=102e3cd7-cbeb-4804-8a55-fa9b9bd2e607',
      image_1:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F01%2F5.jpg?alt=media&token=edb9eeea-caef-483c-88b4-3bf42b32a150',
      image_2:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F01%2F1.png?alt=media&token=102e3cd7-cbeb-4804-8a55-fa9b9bd2e607',
      image_3:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F01%2F2.png?alt=media&token=c008cd50-7462-44f2-9578-b40117d51f57',
      image_4:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F01%2F3.png?alt=media&token=29a7e964-0dd7-454f-9fa0-2f7b34a7ccb5',
      image_5:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F01%2F4.jpg?alt=media&token=b267e1ad-5898-4f3e-8125-8d220b8a5d01',
      image_6:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F01%2F6.jpg?alt=media&token=5964e7e6-e3a6-487b-862d-cde38773f91f',
    },
    updatedAt: {seconds: 1615173701, nanoseconds: 699000000},
    description: `Faucibus interdum posuere lorem ipsum. Arcu cursus euismod quis viverra nibh cras. Pellentesque sit amet porttitor eget dolor. Ac felis donec et odio pellentesque. Aliquam sem et tortor consequat id. Adipiscing bibendum est ultricies integer quis. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Tortor at risus viverra adipiscing. Vitae tortor condimentum lacinia quis vel. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Magna fringilla urna porttitor rhoncus dolor`,
    id: '6zk0oWQ2jAH1rrcGR4SM',
  },
  {
    brand: 'Britannia',
    id: 'M3hjOlQFSwmExNvlr621',
    level1CategoryId: 'uDSixaTvc6vWapWJn7vi',
    countryOfOrigin: 'China',
    keywords: [],
    level2CategoryId: 'gmYgDPAqFAf0n3iNXwcP',
    isGroupParent: true,
    title:
      'Reusable Grocery Shopping Box Bags (3 Pack - Gray). Large, Premium Quality Heavy Duty Tote Bag Set with Extra Long Handles & Reinforced Bottom. Foldable, Collapsible, Durable and Eco Friendly',
    active: true,
    marketPrice: 190,
    sellingPrice: 190,
    quantity: 20,
    images: {
      image_0:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F05%2F1.jpg?alt=media&token=350d56f7-37a3-4197-a579-5764fe0d2ea3',
      image_1:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F05%2F1.jpg?alt=media&token=350d56f7-37a3-4197-a579-5764fe0d2ea3',
      image_2:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F05%2F2.jpg?alt=media&token=ed41ef71-7cb2-41b7-84ac-01535f45695b',
      image_3:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F05%2F3.jpg?alt=media&token=3f6bd4a2-308f-4e57-93a3-e125d9489c91',
    },
    updatedAt: {seconds: 1614870710, nanoseconds: 99000000},
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare. Consectetur lorem donec massa sapien faucibus et molestie. Massa eget egestas purus viverra accumsan in nisl nisi. Cras ornare arcu dui vivamus arcu. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Tellus cras adipiscing enim eu. Accumsan in nisl nisi scelerisque. Imperdiet nulla malesuada pellentesque elit eget gravida. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Mollis nunc sed id semper risus in. Feugiat sed lectus vestibulum mattis. Dignissim cras tincidunt lobortis feugiat. Fermentum et sollicitudin ac orci phasellus egestas. Risus commodo viverra maecenas accumsan. Non blandit massa enim nec dui nunc. In eu mi bibendum neque.`,
  },
  {
    brand: null,
    id: 'iZ3IPNLd25ln99RatKiq',
    level1CategoryId: 'uDSixaTvc6vWapWJn7vi',
    countryOfOrigin: 'France',
    keywords: ['tinpate', 'soya', 'sauce'],
    level2CategoryId: 'NvMWRQbQPTdLG0oCaHno',
    isGroupParent: true,
    title:
      'Sparkling Ice, Black Cherry Sparkling Water, with Antioxidants and Vitamins, Zero Sugar, 17 fl oz Bottles (Pack of 12)',
    active: true,
    marketPrice: 980,
    sellingPrice: 750,
    quantity: 60,
    images: {
      image_0:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F03%2F1.jpg?alt=media&token=6450905b-df68-4087-9b13-62b80f9f6787',
      image_1:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F03%2F1.jpg?alt=media&token=6450905b-df68-4087-9b13-62b80f9f6787',
      image_2:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F03%2F2.jpg?alt=media&token=b04fa90e-e6bd-4e2d-b67a-995ff4fc6282',
      image_3:
        'https://firebasestorage.googleapis.com/v0/b/templates-4fbfb.appspot.com/o/images%2F03ezmart%2Fproducts%2F03%2F3.jpg?alt=media&token=0cdf701e-7cd1-4514-95fb-2ceaf7a96c16',
    },
    updatedAt: {seconds: 1614904709, nanoseconds: 308000000},
    description: `Facilisis magna etiam tempor orci eu. Urna porttitor rhoncus dolor purus non enim praesent. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Lacus vestibulum sed arcu non odio euismod lacinia at. Volutpat odio facilisis mauris sit amet massa vitae. Libero id faucibus nisl tincidunt eget nullam non nisi est. Lobortis scelerisque fermentum dui faucibus. Imperdiet massa tincidunt nunc pulvinar sapien et. Dictum non consectetur a erat nam at lectus urna. Viverra aliquet eget sit amet tellus cras adipiscing enim. Sit amet aliquam id diam maecenas ultricies mi. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.`,
  },
];
