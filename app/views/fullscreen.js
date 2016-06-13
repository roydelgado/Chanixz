import React, {
  Component,
  StyleSheet,
  Image,
  View,
} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch',
  },
  image: {
    flex: 1,
  },
});

export default class FullScreen extends Component {
  constructor(props) {
    super(props);
  }
  buildFullScreenImages(posts) {
    return posts.map((post, idx) => {
      const uri = `http://i.4cdn.org/${this.props.boardId}/${post.tim}${post.ext}`;
      return (
        <View style={styles.imageContainer} key={idx}>
          <Image
            source={{ uri }}
            style={styles.image}
          />
        </View>
      );
    });
  }
  render() {
    return (
      <Swiper>
        {this.buildFullScreenImages(this.props.posts)}
      </Swiper>
    );
  }
}
