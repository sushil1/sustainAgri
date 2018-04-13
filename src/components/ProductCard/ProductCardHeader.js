import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FontAwesome, EvilIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';

import { colors } from '../../utils/constants';
import { makeHitSlop } from '../../utils/metrics';

const ICON_SIZE = 30;

const styles = StyleSheet.create({
  root: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  productNameContainer: {
    flex: 0.9
  },
  productName: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.SECONDARY
  },
  addToCartContainer: {
    flex: 0.2,
    alignItems: 'center'
  },
  addToCartButton: {
    color: '#000'
  }
});

const ProductCardHeader = ({ name, navigation }) => (
  <View style={styles.root}>
    <View style={styles.productNameContainer}>
      <Text style={styles.productName}>{name}</Text>
    </View>

    <View style={styles.addToCartContainer}>
      <Touchable
        hitSlop={makeHitSlop(20)}
        feedback="opacity"
        onPress={() =>
          navigation.navigate('ProductDetails', {
            productId: _id,
            productName: name
          })
        }
      >
        <EvilIcons name="chevron-right" size={ICON_SIZE} />
      </Touchable>
    </View>
  </View>
);

export default ProductCardHeader;
