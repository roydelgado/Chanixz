import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import HTMLView from 'react-native-htmlview';
import GridView from 'react-native-grid-view';

import FullScreen from './fullscreen';

export default class Thread extends Component {
  constructor(props) {
    super(props);
    this.requestUrl = `http://a.4cdn.org/${props.boardId}/thread/${props.threadId}.json`;
    this.renderPosts = this.renderPosts.bind(this);
    this.navigateFullScreen = this.navigateFullScreen.bind(this);
    this.state = {
      posts: [],
      loaded: false
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    fetch(this.requestUrl)
      .then((response) => response.json())
      .then((responseData) => {
        const filteredPosts = responseData.posts.filter((post) => {
          return post.ext;
        });
        this.setState({
          posts: filteredPosts,
          loaded: true
        });
      })
      .done();
  }
  renderLoadingView() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>
            {`Loading ${this.props.name}...`}
          </Text>
      </View>
    );
  }
  navigateFullScreen(post) {
    this.props.navigator.push({
      component: FullScreen,
      passProps: { posts: this.state.posts, boardId: this.props.boardId },
    });
  }
  renderPosts(post, idx) {
    if(post.ext) {
      let uri = `http://i.4cdn.org/${this.props.boardId}/${post.tim}${post.ext}`;
      //console.log(uri);
      const bound = this.navigateFullScreen.bind(null, post);
      return (
          <View style={styles.imageList} key={post.tim}>
            <TouchableHighlight onPress={bound}>
              <Image
                source={{uri: uri}}
                style={styles.thumbnail}
              />
            </TouchableHighlight>
          </View>
      );
    }
    return null;
  }
  render() {
    if(!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <GridView
        items={this.state.posts}
        itemsPerRow={2}
        renderItem={this.renderPosts}
        style={styles.gridView}
      />
    );
  }
}

const threadSummaryStyle = StyleSheet.create({
  p: {
    fontSize: 9
  },
  div: {
    fontSize: 10
  },
  a: {
    fontSize: 10
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderTopColor: '#777',
    borderStyle: 'solid',
    borderTopWidth: 1
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  posts: {
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  summary: {
    fontSize: 5
  },
  gridView: {
    paddingTop: 20,
    marginTop: 44,
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
    height: 60,
    paddingLeft: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  imageList: {
    flex: 1,
    flexDirection: 'row'
  },
  thumbnail: {
    width: 200,
    height: 200,
  }
});
