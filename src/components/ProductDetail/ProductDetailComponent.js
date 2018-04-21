import React, { Component } from 'react';
import { Text, StyleSheet, Image, ScrollView } from 'react-native';

import ImageCard from './ImageCard';
import DescriptionCard from './DescriptionCard';
import MetaCard from './MetaCard';
import ShippingCard from './ShippingCard';

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
      <ScrollView style={styles.container}>
        <ImageCard thumbnail={thumbnail} />
        <DescriptionCard description={description} />
        <MetaCard price={price} />
        <ShippingCard />
      </ScrollView>
    );
  }
}

export default ProductDetailComponent;
