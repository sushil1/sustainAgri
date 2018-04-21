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
  },
  placeholderHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  placeholderDesc: {
    display: 'flex',
    justifyContent: 'space-between',
    marginVertical: 10
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
        <View style={styles.placeholderHeader}>
          <Placeholder.Box height={20} width="30%" />
          <Placeholder.Box height={20} width="10%" />
        </View>
        <View style={styles.cardImageContainer}>
          <Placeholder.Box
            animate="fade"
            width="100%"
            height={150}
            onReady={isLoaded}
            style={{ alignSelf: 'stretch' }}
          />
        </View>
        <View style={styles.placeholderDesc}>
          <Placeholder.Box height={13} width="100%" animate="fade" />
          <Placeholder.Box height={5} width="100%" color="white" />
          <Placeholder.Box height={13} width="40%" animate="fade" />
        </View>
        <View style={styles.placeholderHeader}>
          <Placeholder.Box height={20} width="25%" />
          <Placeholder.Box height={20} width="25%" />
        </View>
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
              price: price,
              thumbnail: thumbnail,
              description: description
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
