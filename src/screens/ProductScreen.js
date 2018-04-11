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

const ProductScreen = () => (
  <View style={styles.container}>
    <Text>ProductScreen</Text>
  </View>
);

export default ProductScreen;
