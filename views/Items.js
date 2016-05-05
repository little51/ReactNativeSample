'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Alert,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';

class ItemsWiew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.item_name !== r2.item_name })
    }
  }
  componentWillMount() {
    this._fetchData();
  }

  _fetchData() {
    fetch('http://s.5starsoft.com.cn:8089/his/prices/00000011/AA')
      .then(res => res.json())
      .then(res => {
        this.setState({ ds: this.state.ds.cloneWithRows(res.result) });
      });
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={require('image!login') } />
            <View  style={styles.textContainer}>
              <Text style={styles.itemname}>{rowData.item_name}</Text>
              <Text style={styles.title}
                numberOfLines={1}>{rowData.retail_price}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <ListView
        dataSource={this.state.ds}
        renderRow={this.renderRow.bind(this) }/>
    );
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
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  itemname: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 18,
    color: '#656565'
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});

module.exports = ItemsWiew;
