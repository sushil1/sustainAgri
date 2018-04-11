import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppMainNav from './src/navigation';

export default class App extends React.Component {
  render() {
    return <AppMainNav />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
