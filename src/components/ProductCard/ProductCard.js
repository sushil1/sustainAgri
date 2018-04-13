import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Placeholder from 'rn-placeholder';

import ProductCardHeader from './ProductCardHeader';
import ProductCardBottom from './ProductCardBottom';

import Touchable from '@appandflow/touchable';

import { colors } from '../../utils/constants';
import { makeHitSlop } from '../../utils/metrics';

const styles = StyleSheet.create({
  root: {
    minHeight: 120,
    backgroundColor: colors.WHITE,
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
  cardImageContainer: {
    flex: 1
  },
  img: {
    flex: 1,
    width: '100%'
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
  _id,
  name,
  description,
  price,
  quantity,
  rating,
  isLoaded,
  placeholder,
  thumbnail,
  navigation
}) {
  if (placeholder) {
    return (
      <View style={styles.root}>
        <Placeholder.ImageContent
          size={100}
          onReady={isLoaded}
          lineNumber={2}
          lineSpacing={20}
          animate="shine"
          lastLineWidth="40%"
          style={{ alignSelf: 'stretch' }}
        >
          <View style={styles.wrapper} />
        </Placeholder.ImageContent>
      </View>
    );
  } else {
    return (
      <View style={styles.root}>
        <Touchable
          hitSlop={makeHitSlop(20)}
          feedback="opacity"
          onPress={() =>
            navigation.navigate('ProductDetail', {
              name: name,
              price: price
            })
          }
        >
          <ProductCardHeader name={name} />

          <View style={styles.cardImageContainer}>
            <Image style={styles.img} source={thumbnail} />
          </View>
          <ProductCardBottom description={description} price={price} />
        </Touchable>
      </View>
    );
  }
}

export default ProductCard;
