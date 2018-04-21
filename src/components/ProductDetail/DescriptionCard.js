import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Touchable from '@appandflow/touchable';

import { colors } from '../../utils/constants';
import { makeHitSlop } from '../../utils/metrics';

const styles = StyleSheet.create({
  root: {
    minHeight: 60,
    backgroundColor: colors.WHITE,
    width: '100%',
    shadowColor: colors.SECONDARY,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.1,
    justifyContent: 'center',
    paddingHorizontal: 5
  }
});

const DescriptionCard = ({ description }) => (
  <View style={styles.root}>
    <Text>{description}</Text>
  </View>
);

export default DescriptionCard;

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
