import React, {
  StyleSheet,
  View,
  Text,
  Navigator,
  Alert,
  TouchableHighlight
} from 'react-native';

import ddpClient from '../config/ddp-client';

var Main = React.createClass({
  displayName: 'Main',

  getInitialState() {
    return {
      loaded: false
    };
  },

  componentWillMount() {
    ddpClient.initialize()
      .then((res) => {
        return this.setState({loaded: true});
      })
      .catch((err) => {
        return this.setState({loaded: false});
      });
  },

  componentWillUnmount() {
    ddpClient.close();
  },

  render() {

    if (!this.state.loaded) {
      return (
        <View style={styles.loading}>
          <Text>Connecting...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Chompy!
        </Text>
        <TouchableHighlight
            onPress={onPressButton}
            style={styles.button}
            underlayColor='#b61a09'>
          <View style={styles.button}>
            <Text style={{margin: 30}}>Button</Text>
          </View>          
        </TouchableHighlight>
      </View>
    );
  }
});

function onPressButton() {
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')}
    ]
  )
}

function renderRow(chomp) {
  return (
    <View style={{margin: 10}}>
      <Text style={styles.row}>
        {chomp.img}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#b94a48'
  },
  row: {
  }
});

module.exports = Main;