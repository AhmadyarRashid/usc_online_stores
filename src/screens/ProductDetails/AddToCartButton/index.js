import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {TouchableHighlight, View} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {Button} from '../../../components';
import {Components} from '../../../styles/colors';
import {styles} from './styles';

const {addToCartButtonStyle} = styles;

const AddToCartButton = ({navigation, product}) => {
  const {cart} = useSelector(state => state.cart);
  const [loading, setLoading] = useState();

  let availableStock = null;
  let selectedQuantity = null;
  let buttonLabel = 'ADD TO CART';
  let productId = null;

  if (product) {
    const {id, quantity} = product || {};
    availableStock = quantity;
    productId = id;
  }

  if (cart && Array.isArray(cart)) {
    cart.forEach(item => {
      const {id, quantityCounter} = item || {};
      if (id === productId) {
        selectedQuantity = quantityCounter;
      }
    });
  }

  const isOutOfStock = availableStock < 1;
  const limitedStock = selectedQuantity >= availableStock;

  if (isOutOfStock) {
    buttonLabel = 'OUT OF STOCK';
  } else if (limitedStock) {
    buttonLabel = 'LIMITED STOCK';
  }

  const RenderCartIcon = () => {
    let cartItemsCount = null;

    if (cart && Array.isArray(cart) && cart.length > 0) {
      cartItemsCount = cart.length;
    }

    const BadgedIcon = withBadge(cartItemsCount)(Icon);

    if (cartItemsCount) {
      return (
        <BadgedIcon
          type="ionicon"
          name="cart"
          size={25}
          color={Components.Icon}
        />
      );
    }

    return <Ionicons name="cart" size={25} color={Components.Icon} />;
  };

  const onPressAddToCart = () => {};

  return (
    <View style={addToCartButtonStyle}>
      <View style={{flex: 1}}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => {
            navigation.navigate('Cart');
          }}
          style={{flexWrap: 'wrap'}}>
          <RenderCartIcon />
        </TouchableHighlight>
      </View>

      <Button
        label={buttonLabel}
        containerStyle={{flex: 2}}
        loading={loading}
        disabled={loading || isOutOfStock || limitedStock ? true : false}
        onPress={onPressAddToCart}
      />
    </View>
  );
};

AddToCartButton.propTypes = {
  listingItem: PropTypes.object,
  product: PropTypes.object,
  selectedVariant: PropTypes.object,
};

AddToCartButton.defaultProps = {
  listingItem: {},
};

export default AddToCartButton;
