import React from 'react';
import { Text, View } from 'react-native';

const Sizes = (item) => {
    // Logic to store the item in the cart
    console.log('Item added to cart:', item);
    // For demonstration purposes, an alert is shown
    Alert.alert('Item Added', 'The item is added to your cart.');
  }; 

export default Sizes;
