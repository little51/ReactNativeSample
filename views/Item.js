'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Alert
} from 'react-native';

class ItemWiew extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.items}>
          <Text style={styles.text}>ok</Text>
          <Text style={styles.text}>ok</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  items: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    flex: 1
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14
  }
});

module.exports = ItemWiew;