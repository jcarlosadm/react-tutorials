import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import reducers from './reducers';
import firebaseInfo from '../firebase_setup.json';
import LoginForm from './components/login_form';

export default class MainApp extends React.Component {
  componentWillMount() {
    firebase.initializeApp(firebaseInfo);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

