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

import ItemView from './Item';

class ItemsWiew extends Component {
  render() {
    var items = [];
    for (var i = 0; i < 10; i++) {
      items.push(
        <ItemView key={i}>
        </ItemView>
      );
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          {items}
        </View>
      </ScrollView>
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
    backgroundColor: '#F5FCFF',
  }
});

module.exports = ItemsWiew;
