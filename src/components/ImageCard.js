import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Touchable from '@appandflow/touchable';

import { colors } from '../utils/constants';
import { makeHitSlop, makeCircle } from '../utils/metrics';
import { EvilIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  root: {
    minHeight: 300,
    backgroundColor: colors.WHITE,
    width: '100%',
    shadowColor: colors.SECONDARY,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.1,
    marginBottom: 4
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  actionBarContainer: {
    marginTop: 260,
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 20
  },

  heartButton: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noButton: {
    flex: 0.6
  },
  addToCartButton: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconButtons: {
    ...makeCircle(40),
    backgroundColor: colors.LIGHT_GRAY,
    opacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const ImageCard = ({ thumbnail }) => (
  <View style={styles.root}>
    <Image style={styles.img} source={thumbnail} />
    <View style={styles.actionBarContainer}>
      <View style={styles.heartButton}>
        <Touchable
          hitSlop={makeHitSlop(20)}
          feedback="opacity"
          style={styles.iconButtons}
        >
          <EvilIcons size={30} name="heart" />
        </Touchable>
      </View>noButton
      <View style={styles.noButton} />
      <View style={styles.addToCartButton}>
        <Touchable
          hitSlop={makeHitSlop(20)}
          feedback="opacity"
          style={styles.iconButtons}
        >
          <MaterialIcons size={25} name="add-shopping-cart" />
        </Touchable>
      </View>
    </View>
  </View>
);

export default ImageCard;
