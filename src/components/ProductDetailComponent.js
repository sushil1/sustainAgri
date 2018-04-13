import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductDetailComponent = ({ navigation }) => (
  <View>
    <Text> Product Detail Screen, </Text>
    <Text>Price:{navigation.state.params.price}</Text>
    <Text>Name: {navigation.state.params.name}</Text>
  </View>
);

export default ProductDetailComponent;
