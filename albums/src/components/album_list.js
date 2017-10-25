import React from 'react';
import { View, Text } from 'react-native';

export default class AlbumList extends React.Component {
  componentWillMount() {
    console.log('componentWillMount in AlbumList');
  }

  render() {
    return (
      <View>
        <Text>Album List!!!!</Text>
      </View>
    );
  }
}
