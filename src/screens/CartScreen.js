import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class CartScreen extends Component {
  state = {
    items: ['a', 'b', 'c']
  };

  render() {
    const { items } = this.state;
    return (
      <View style={styles.container}>
        <Text>Cart Items: {items.length}</Text>
      </View>
    );
  }
}

export default CartScreen;
