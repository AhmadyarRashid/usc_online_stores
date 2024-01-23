import {Dimensions} from 'react-native';

export const DEVICE = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const SYMBOL = {
  CURRENCY: 'Rs.',
};

export const BANNER_TYPES = {
  SINGLE_PRODUCT: 1,
  PRODUCT_LIST: 2,
  BRAND: 3,
  TAGS: 4,
  LEVEL2_CATEGORY_ID: 5,
};

export const PAYMENT_METHODS = {
  COD: 'CASH ON DELIVERY',
  BANK_TRANSFER: 'BANK TRANSFER',
};

export const PAYMENT_STATUS_CODE = {
  AWAITING_PAYMENT: 10,
  PAID: 11,
};

export const ORDER_TRACKING_STATUS_CODE = {
  ORDER_RECEIVED: 1,
  ORDER_READY_FOR_DISPATCH: 2,
  ORDER_DISPATCHED: 3,
  ORDER_DELIVERED: 4,
  ORDER_CANCELLED_BY_MERCHANT: 5,
  ORDER_CANCELLED_BY_USER: 6,
};

export const ORDER_STATUS = [
  {
    code: ORDER_TRACKING_STATUS_CODE.ORDER_RECEIVED,
    name: 'Order Received',
    bgColor: '#f0a500',
  },
  {
    code: ORDER_TRACKING_STATUS_CODE.ORDER_READY_FOR_DISPATCH,
    name: 'Ready For Dispatch',
    bgColor: '#cf7500',
  },
  {
    code: ORDER_TRACKING_STATUS_CODE.ORDER_DISPATCHED,
    name: 'Order Dispatched',
    bgColor: '#407BFF',
  },
  {
    code: ORDER_TRACKING_STATUS_CODE.ORDER_DELIVERED,
    name: 'Delivered',
    bgColor: '#3AA76D',
  },
  {
    code: ORDER_TRACKING_STATUS_CODE.ORDER_CANCELLED_BY_MERCHANT,
    name: 'Cancelled By Merchant',
    bgColor: '#E95D3F',
  },
  {
    code: ORDER_TRACKING_STATUS_CODE.ORDER_CANCELLED_BY_USER,
    name: 'Cancelled By User',
    bgColor: '#E95D3F',
  },
];

export const REFUND_STATUS = [
  {
    code: 10,
    name: 'Refunded Fully (Whole Order)',
  },
  {
    code: 11,
    name: 'Refunded Partially (Whole Order)',
  },
];
