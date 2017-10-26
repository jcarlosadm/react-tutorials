import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Linking } from 'react-native';
import Card from './card';
import CardSection from './card_section';
import Button from './button';

export default class AlbumDetail extends React.Component {
  render() {
    const { title, artist, image, thumbnail_image, url } = this.props.album;

    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
          </View>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image style={styles.imageStyle} source={{ uri: image }} />
        </CardSection>

        <CardSection>
          <Button onPress={() => Linking.openURL(url)}>
            Buy Now
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: win.width,
    flex: 1,
    width: null
  }
});
