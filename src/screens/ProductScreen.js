import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, FlatList } from 'react-native';

import ProductCard from '../components/ProductCard/ProductCard';

import milk from '../../assets/images/milk.jpeg';
import coffee from '../../assets/images/coffee.jpeg';
import herbs from '../../assets/images/herbs.jpeg';

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
    }, 2000);
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
            data={[1, 2, 3, 4]}
            keyExtractor={item => item.toString()}
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
    _id: 100,
    name: 'Milk',
    description:
      'Local cow milk, high in calcium and A2 protein, its really good for babies as well as adults',
    quantity: 1,
    measurement: 'litre',
    price: 5000,
    thumbnail: milk,
    rating: 4
  },
  {
    _id: 101,
    name: 'Coffee',
    description:
      'Local coffee made grown in our own garden, pure organic aromatic coffee',
    quantity: 1,
    measurement: 'cup',
    price: 4000,
    thumbnail: coffee,
    rating: 3
  },
  {
    _id: 102,
    name: 'Herbs',
    description:
      'Local herbs from the garden, varities of seasonal herbs available',
    quantity: 1,
    measurement: 'bunch',
    price: 3000,
    thumbnail: herbs,
    rating: 4
  }
];
