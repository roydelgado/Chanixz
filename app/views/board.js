import React, {
  Component,
  ListView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import HTMLView from 'react-native-htmlview';
import Thread from './thread';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.requestUrl = `http://a.4cdn.org/${props.id}/catalog.json`;
    this.renderThreads = this.renderThreads.bind(this);
    this.navigateToThread = this.navigateToThread.bind(this);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false
    };
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
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    fetch(this.requestUrl)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData[0].threads),
          loaded: true
        });
      })
      .done();
  }
  navigateToThread(thread) {
    const newThread = {
      boardId: this.props.id,
      threadId: thread.no
    };
    this.props.navigator.push({
      title: thread.no.toString(),
      component: Thread,
      passProps: newThread
    });
  }
  renderThreads(thread) {
    let uri = `http://i.4cdn.org/${this.props.id}/${thread.tim}${thread.ext}`;
    let title = `<p>${thread.com}</p>`;
    //const BoundNavigate = this.navigateToThread.bind(null, thread);
    return (
      <TouchableHighlight onPress={() => this.navigateToThread(thread)}>
        <View style={styles.container}>
          <Image
            source={{uri: uri}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <HTMLView
              value={title}
              onLinkPress={(url) => console.log('navigating to: ', url)}
              stylesheet={threadSummaryStyle}
              style={styles.summary}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    if(!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderThreads}
        style={styles.listView}
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
  summary: {
    fontSize: 5
  },
  listView: {
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
  thumbnail: {
    width: 100,
    height: 100,
  }
});