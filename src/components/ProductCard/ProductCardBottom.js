import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';

import { colors } from '../../utils/constants';
import { makeHitSlop } from '../../utils/metrics';

const ICON_SIZE = 15;

const styles = StyleSheet.create({
  root: {
    height: 80,
    flexDirection: 'column',
    alignItems: 'center'
  },
  productDescriptionContainer: {
    flex: 1,
    flexWrap: 'nowrap',
    height: 60,
    alignSelf: 'stretch'
  },
  productDescription: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.SECONDARY
  },
  metaContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  priceContainer: {
    flex: 0.7,
    justifyContent: 'center'
  },
  price: {
    fontWeight: 'bold',
    fontSize: 12
  },
  ratingIconContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  ratingButton: {}
});

const priceinDollar = price => Number(price / 1000, 2).toFixed(2);

const ProductCardBottom = ({ description, price, rating }) => (
  <View style={styles.root}>
    <View style={styles.productDescriptionContainer}>
      <Text numberofLines={4} style={styles.productDescription}>
        {description}
      </Text>
    </View>

    <View style={styles.metaContainer}>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>AUD {priceinDollar(price)}</Text>
      </View>
      <View style={styles.ratingIconContainer}>
        <FontAwesome name="star" size={ICON_SIZE} style={styles.ratingButton} />
        <FontAwesome name="star" size={ICON_SIZE} style={styles.ratingButton} />
        <FontAwesome name="star" size={ICON_SIZE} style={styles.ratingButton} />
      </View>
    </View>
  </View>
);

export default ProductCardBottom;
