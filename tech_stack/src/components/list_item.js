import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from './common';

export default class ListItem extends React.Component {
  render() {
    const { titleStyle } = styles;

    return (
      <CardSection>
        <Text style={titleStyle}>
          {this.props.library.title}
        </Text>
      </CardSection>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});
