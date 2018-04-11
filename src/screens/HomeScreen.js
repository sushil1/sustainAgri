import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

//import Touchable from '@appandflow/touchable';
//import { makeCircle, makeHitSlop } from '../utils/metrics';

import homeImage from '../../assets/images/homeImage.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    backgroundColor: '#ccc',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  homeTextWrapper: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeText: {
    textAlign: 'center',
    fontSize: 38
  },
  mottoText: {
    flex: 0.2,
    textAlign: 'center',
    fontSize: 15
  },
  btnWrapper: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const HomeScreen = () => (
  <View style={styles.container}>
    <Image source={homeImage} style={styles.image} />
    <View style={styles.homeTextWrapper}>
      <Text style={styles.homeText}>Sustainable Farm</Text>
    </View>
    <Text style={styles.mottoText}>For today and future. For us and them.</Text>
  </View>
);

export default HomeScreen;

// <Touchable
//       hitSlop={makeHitSlop(20)}
//       feedback="opacity"
//       style={styles.btnWrapper}
//     >
//     </Touchable>
