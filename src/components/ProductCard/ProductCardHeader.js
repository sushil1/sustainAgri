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
  rightIconContainer: {
    flex: 0.2,
    alignItems: 'center'
  }
});

const ProductCardHeader = ({ name }) => (
  <View style={styles.root}>
    <View style={styles.productNameContainer}>
      <Text style={styles.productName}>{name}</Text>
    </View>

    <View style={styles.rightIconContainer}>
      <EvilIcons name="chevron-right" size={ICON_SIZE} />
    </View>
  </View>
);

export default ProductCardHeader;
