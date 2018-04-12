import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, FlatList } from 'react-native';

import ProductCard from '../components/ProductCard/ProductCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    display: 'flex'
  }
});

class ProductScreen extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true
      });
    }, 3000);
  }

  _renderItem = ({ item }) => <ProductCard {...item} />;

  _renderPlaceholder = () => (
    <ProductCard placeholder isLoaded={this.state.isLoaded} />
  );

  render() {
    if (!this.state.isLoaded) {
      return (
        <View style={styles.container}>
          <FlatList
            style={{ alignSelf: 'stretch' }}
            data={[1, 2, 3, 4, 5]}
            keyExtractor={item => item._id}
            renderItem={this._renderPlaceholder}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          style={{ alignSelf: 'stretch' }}
          data={products}
          keyExtractor={item => item._id}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default ProductScreen;

const products = [
  {
    _id: 1,
    name: 'Milk',
    description: 'local cow milk',
    quantity: 1,
    measurement: 'litre',
    price: '5000',
    thumbnail: 'image',
    rating: 4
  },
  {
    _id: 1,
    name: 'Coffee',
    description: 'local coffee made from local cow',
    quantity: 1,
    measurement: 'cup',
    price: '4000',
    thumbnail: 'image',
    rating: 4
  },
  {
    _id: 1,
    name: 'Herbs',
    description: 'local herbs from the garden',
    quantity: 1,
    measurement: 'bunch',
    price: '3000',
    thumbnail: 'image',
    rating: 4
  }
];
