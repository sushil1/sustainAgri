import React, { Component } from 'react';
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import { Text } from 'react-native';

import Touchable from '@appandflow/touchable';

import { FontAwesome, SimpleLineIcons, EvilIcons } from '@expo/vector-icons';

import { makeHitSlop } from './utils/metrics';

import { colors } from './utils/constants';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ContactScreen from './screens/ContactScreen';
import AboutScreen from './screens/AboutScreen';
import ProductDetailComponent from './components/ProductDetail/ProductDetailComponent';

import CartScreen from './screens/CartScreen';

const TAB_ICON_SIZE = 20;

const Tabs = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="home" />
        )
      })
    },
    Products: {
      screen: ProductScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Products',
        headerRight: (
          <Touchable
            hitSlop={makeHitSlop(20)}
            feedback="opacity"
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate('Cart')}
          >
            <EvilIcons size={25} name="cart" />
          </Touchable>
        ),
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="th" />
        )
      })
    },
    About: {
      screen: AboutScreen,
      navigationOptions: () => ({
        headerTitle: 'About Us',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="group" />
        )
      })
    },
    Contact: {
      screen: ContactScreen,
      navigationOptions: () => ({
        headerTitle: 'Contact',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome
            size={TAB_ICON_SIZE}
            color={tintColor}
            name="envelope-o"
          />
        )
      })
    }
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: colors.PRIMARY,
      inactiveTintColor: colors.LIGHT_GRAY,
      style: {
        backgroundColor: colors.WHITE,
        height: 46,
        paddingVertical: 5
      }
    }
  }
);

const AppMainNav = StackNavigator(
  {
    Home: {
      screen: Tabs
    },

    Product: {
      screen: ProductScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Products',
        headerRight: (
          <Touchable
            hitSlop={makeHitSlop(20)}
            feedback="opacity"
            onPress={() => navigation.navigate('Cart')}
          >
            <EvilIcons size={25} name="cart" />
          </Touchable>
        )
      })
    },
    ProductDetail: {
      screen: ProductDetailComponent,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <Text>{navigation.state.params.name}</Text>,
        headerLeft: (
          <Touchable
            hitSlop={makeHitSlop(20)}
            feedback="opacity"
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 15 }}
          >
            <EvilIcons size={35} name="chevron-left" />
          </Touchable>
        ),
        headerRight: (
          <Touchable
            hitSlop={makeHitSlop(20)}
            feedback="opacity"
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate('Cart')}
          >
            <EvilIcons size={25} name="cart" />
          </Touchable>
        )
      })
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <EvilIcons size={25} name="cart" />,
        headerLeft: (
          <Touchable
            hitSlop={makeHitSlop(20)}
            feedback="opacity"
            style={{ marginLeft: 15 }}
            onPress={() => navigation.goBack()}
          >
            <EvilIcons size={35} name="chevron-left" />
          </Touchable>
        ),
        headerRight: (
          <Touchable
            hitSlop={makeHitSlop(20)}
            feedback="opacity"
            style={{ marginRight: 15 }}
            onPress={() => navigation.goBack()}
          >
            <EvilIcons size={25} name="close" />
          </Touchable>
        )
      })
    }
  },
  {
    initialRouteName: 'Home'
  },
  {
    cardStyle: {
      backgroundColor: '#F1F6FA'
    },
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: colors.WHITE
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: colors.SECONDARY
      }
    })
  }
);

export default AppMainNav;
