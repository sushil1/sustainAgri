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

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>HomeScreen</Text>
  </View>
);

export default HomeScreen;
