import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import ImageCard from './ImageCard';
import DescriptionCard from './DescriptionCard';
import MetaCard from './MetaCard';
import ShippingCard from './ShippingCard';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
});

class ProductDetailComponent extends Component {
  render() {
    const {
      name,
      price,
      description,
      thumbnail
    } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <ImageCard thumbnail={thumbnail} />
        <DescriptionCard description={description} />
        <MetaCard price={price} />
        <ShippingCard />
      </View>
    );
  }
}

export default ProductDetailComponent;
