import React from 'react';
import {FlatList, RefreshControl, SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import useFetchAllOrders from '../../../api/hooks/orders/useFetchAllOrders';
import {
  ActivityIndicator,
  PaginationActivityIndicator,
  StatusBar,
} from '../../../components';
import {Components} from '../../../styles/colors';
import RowItem from './RowItem';
import {styles} from './styles';

const {container} = styles;

const AllOrders = ({navigation}) => {
  const {orderHistory} = useSelector(state => state.orderHistory);
  const {
    loading,
    paginating,
    refreshing,
    onRefresh,
    onEndReached,
  } = useFetchAllOrders();

  const keyExtractor = (item, index) => index.toString();

  const RenderOrderCard = ({item}) => {
    return (
      <View style={{marginBottom: 5}}>
        <RowItem data={item} navigation={navigation} />
      </View>
    );
  };

  const RenderFooter = () => {
    if (paginating) {
      return <PaginationActivityIndicator />;
    }

    return <View />;
  };

  return loading ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView style={container}>
      <StatusBar />
      <View style={container}>
        <View style={{flex: 1}}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            style={{
              backgroundColor: Components.Background.tint75Percent,
            }}
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
            data={orderHistory || []}
            renderItem={RenderOrderCard}
            keyExtractor={keyExtractor}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.01}
            ListFooterComponent={RenderFooter}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AllOrders;
