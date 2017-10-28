import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';

export default class MainApp extends Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}
