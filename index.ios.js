/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet
} from 'react-native';

import Dashboard from './app/views/dashboard';


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF'
  }
});

class Chanixz extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            component: Dashboard,
            title: 'Dashboard'
          }}
        />
    );
  }
}

AppRegistry.registerComponent('Chanixz', () => Chanixz);
