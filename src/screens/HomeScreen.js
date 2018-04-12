import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Touchable from '@appandflow/touchable';
import { makeCircle, makeHitSlop } from '../utils/metrics';
import { colors } from '../utils/constants';

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
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    width: 200,
    borderColor: colors.LIGHT_GRAY,
    borderWidth: 1
  },
  newProductsLink: {
    fontSize: 20,
    color: colors.PRIMARY
  }
});

const HomeScreen = ({ navigation }) => (
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
// hitSlop={makeHitSlop(20)}
// feedback="opacity"
// style={styles.btnWrapper}
// onPress={() => navigation.navigate('NewProduct')}
// >
// <Text style={styles.newProductsLink}>Go to New Products</Text>
// </Touchable>
