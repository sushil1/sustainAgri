import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Placeholder from 'rn-placeholder';

import ProductCardHeader from './ProductCardHeader';
import ProductCardBottom from './ProductCardBottom';

import { colors } from '../../utils/constants';

const styles = StyleSheet.create({
  root: {
    minHeight: 120,
    backgroundColor: colors.WHITE,
    //backgroundColor: 'pink',
    width: '100%',
    padding: 7,
    shadowColor: colors.SECONDARY,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.1,
    marginVertical: 5
  },
  cardContentContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingRight: 20,
    paddingLeft: 0
  },
  cardContentText: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '500',
    color: colors.SECONDARY
  },
  wrapper: {
    flex: 1
  }
});

function ProductCard({
  name,
  description,
  price,
  quantity,
  rating,
  isLoaded,
  placeholder
}) {
  if (placeholder) {
    return (
      <View style={styles.root}>
        <Placeholder.ImageContent
          size={80}
          onReady={isLoaded}
          lineNumber={3}
          lineSpacing={8}
          animate="shine"
          lastLineWidth="40%"
        >
          <View style={styles.wrapper} />
        </Placeholder.ImageContent>
      </View>
    );
  } else {
    return (
      <View style={styles.root}>
        <ProductCardHeader name={name} />

        <View style={styles.cardContentContainer}>
          <Text style={styles.cardContentText}>tthis is card content</Text>
        </View>

        <ProductCardBottom description={description} price={price} />
      </View>
    );
  }
}

export default ProductCard;
