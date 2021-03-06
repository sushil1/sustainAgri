import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, FlatList } from 'react-native';

import ProductCard from '../components/ProductCard/ProductCard';

import milk from '../../assets/images/milk.jpeg';
import coffee from '../../assets/images/coffee.jpeg';
import herbs from '../../assets/images/herbs.jpeg';
import spicies from '../../assets/images/spicies.jpeg';
import manure from '../../assets/images/manure.jpg';
import butter from '../../assets/images/butter.jpg';

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

  _renderItem = ({ item }) => (
    <ProductCard {...item} navigation={this.props.navigation} />
  );

  _renderPlaceholder = () => (
    <ProductCard placeholder isLoaded={this.state.isLoaded} />
  );

  render() {
    if (!this.state.isLoaded) {
      return (
        <View style={styles.container}>
          <FlatList
            style={{ alignSelf: 'stretch' }}
            data={[1, 2]}
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
          navigation={this.props.navigation}
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
  },
  {
    _id: 103,
    name: 'Spicies',
    description: 'Local spicies from our garden grown with compost fertilizer',
    quantity: 1,
    measurement: 'kg',
    price: 10000,
    thumbnail: spicies,
    rating: 4
  },
  {
    _id: 104,
    name: 'Butter',
    description: 'Butter from local cows',
    quantity: 1,
    measurement: 'cup',
    price: 8000,
    thumbnail: butter,
    rating: 3
  },
  {
    _id: 105,
    name: 'Manure',
    description: 'Cow compost manure, perfect for your vegies garden',
    quantity: 1,
    measurement: 'kilo',
    price: 20000,
    thumbnail: manure,
    rating: 4
  }
];
