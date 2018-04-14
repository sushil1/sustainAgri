import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Touchable from '@appandflow/touchable';

import { colors } from '../utils/constants';
import { makeHitSlop } from '../utils/metrics';

const styles = StyleSheet.create({
  root: {
    minHeight: 50,
    backgroundColor: colors.WHITE,
    width: '100%',
    shadowColor: colors.SECONDARY,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.1,
    marginVertical: 2,
    paddingVertical: 5,
    paddingHorizontal: 5
  }
});

const MetaCard = ({ price }) => (
  <View style={styles.root}>
    <Text>AUD:{price}</Text>
  </View>
);

export default MetaCard;

// <Touchable
//           hitSlop={makeHitSlop(20)}
//           feedback="opacity"
//           onPress={() =>
//             navigation.navigate('ProductDetail', {
//               name: name,
//               price: price,
//               thumbnail: thumbnail,
//               description: description
//             })
//           }
//         >
