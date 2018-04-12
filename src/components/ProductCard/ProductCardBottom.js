import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'yellow',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  productDescription: {
    flex: 0.8
  }
});

const ProductCardBottom = ({ description, price }) => (
  <View style={styles.root}>
    <Text style={styles.productDescription}>{description}</Text>
    <Text>${price}</Text>
  </View>
);

export default ProductCardBottom;
