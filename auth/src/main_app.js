import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import firebaseInfo from '../firebase_info.json';

export default class MainApp extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseInfo);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}
