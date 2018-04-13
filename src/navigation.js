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
import ProductDetailComponent from './components/ProductDetailComponent';

import NewProductScreen from './screens/NewProductScreen';

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
      navigationOptions: () => ({
        headerTitle: 'Products',
        headerRight: (
          <Touchable hitSlop={makeHitSlop(20)} feedback="opacity">
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
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: colors.PRIMARY,
      inactiveTintColor: colors.LIGHT_GRAY,
      style: {
        backgroundColor: colors.WHITE,
        height: 50,
        paddingVertical: 5
      }
    }
  }
);

const ProductDetailModal = StackNavigator(
  {
    ProductDetail: {
      screen: ProductDetailComponent,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Touchable
            hitSlop={makeHitSlop(20)}
            feedback="opacity"
            onPress={() => navigation.navigate('Product')}
          >
            <EvilIcons size={30} name="chevron-left" />
          </Touchable>
        ),
        headerRight: (
          <Touchable
            hitSlop={makeHitSlop(20)}
            feedback="opacity"
            onPress={() => navigation.goBack()}
          >
            <EvilIcons size={25} name="cart" />
          </Touchable>
        )
      })
    }
  },
  {
    headerMode: 'none'
  }
);

const NewProductModal = StackNavigator(
  {
    NewProduct: {
      screen: NewProductScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <Text>Back</Text>,
        headerRight: (
          <Touchable
            hitSlop={makeHitSlop(20)}
            feedback="opacity"
            onPress={() => navigation.goBack()}
          >
            <EvilIcons size={25} name="close" />
          </Touchable>
        )
      })
    }
  },
  {
    headerMode: 'none'
  }
);

const AppMainNav = StackNavigator(
  {
    Home: {
      screen: Tabs
    },
    Product: {
      screen: ProductScreen,
      navigationOptions: ({ navigate }) => ({
        headerTitle: 'Products',
        headerRight: (
          <Touchable hitSlop={makeHitSlop(20)} feedback="opacity">
            <EvilIcons size={25} name="cart" />
          </Touchable>
        )
      })
    },
    ProductDetail: {
      screen: ProductDetailModal
    },
    NewProduct: {
      screen: NewProductModal
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
