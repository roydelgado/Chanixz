import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
  AsyncStorage,
} from 'react-native';

import Board from './board';

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
});

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleBoardNavigation = this.handleBoardNavigation.bind(this);
    this.renderBoardThumbnail = this.renderBoardThumbnail.bind(this);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.getAvailableBoards()),
    };
  }
  // deleteItem() {
  //   AsyncStorage.removeItem('hi');
  // }
  getAvailableBoards() {
    // AsyncStorage.setItem('hi', 'omg', () => {
    //   console.log("Stored");
    // });
    // AsyncStorage.getItem('hi', (err, result) => {
    //   console.log(result);
    // });
    const boards = [
      {
        id: 'g',
        name: 'Technology',
      },
      {
        id: 'v',
        name: 'Video Games',
      },
      {
        id: 'b',
        name: 'Random',
      },
      {
        id: 's',
        name: 'S',
      },
      {
        id: 'gif',
        name: 'GIF',
      },
    ];
    return boards;
  }
  handleBoardNavigation(board) {
    this.props.navigator.push({
      title: board.name,
      component: Board,
      passProps: board,
    });
  }
  renderBoardThumbnail(board, ref, idx) {
    return (
      <TouchableHighlight
        style={styles.row}
        key={idx}
        onPress={() => { this.handleBoardNavigation(board); }}
      >
        <View style={styles.thumb}>
          <Text style={styles.text}>
            {board.name}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
  renderBoards() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderBoardThumbnail}
        contentContainerStyle={styles.list}
      />
    );
  }
  render() {
    return this.renderBoards();
  }
}

// Dashboard.propTypes = {
//   navigator: PropTypes.object,
// };
