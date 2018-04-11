import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const NewProductScreen = () => (
  <View style={styles.container}>
    <Text>Create your new product</Text>
  </View>
);

export default NewProductScreen;
