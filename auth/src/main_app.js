import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import firebaseInfo from '../firebase_info.json';
import LoginForm from './components/login_form';

export default class MainApp extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseInfo);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
