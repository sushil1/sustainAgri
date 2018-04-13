import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const CartScreen = () => (
  <View style={styles.container}>
    <Text>Cart Items</Text>
  </View>
);

export default CartScreen;
