/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
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
  Navigator
} from 'react-native';

import MenuView from './Menu';

class HomeWiew extends Component {
  _onMenuViewClick(title, tag) {
    if(tag === 'm1'){
      _navigator.push({'name':'items'}) ;
    }
    else{
      Alert.alert('提示', '你点击了:' + title + " Tag:" + tag);  
    }    
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.searchview}>
            <TextInput style={styles.search} placeholder="搜索"/>
          </View>
          <View style={styles.MenuViewView}>
            <MenuView renderIcon={require('image!m1') } showText={'功能一'} tag={'m1'} onClick={this._onMenuViewClick}/>
            <MenuView renderIcon={require('image!m2') } showText={'功能二'} tag={'m2'} onClick={this._onMenuViewClick}/>
            <MenuView renderIcon={require('image!m3') } showText={'功能三'} tag={'m3'} onClick={this._onMenuViewClick}/>
            <MenuView renderIcon={require('image!m4') } showText={'功能四'} tag={'m4'} onClick={this._onMenuViewClick}/>
          </View>
          <View style={styles.MenuViewView}>
            <MenuView renderIcon={require('image!m5') } showText={'功能五'} tag={'m5'} onClick={this._onMenuViewClick}/>
            <MenuView renderIcon={require('image!m6') } showText={'功能六'} tag={'m6'} onClick={this._onMenuViewClick}/>
            <MenuView renderIcon={require('image!m7') } showText={'功能七'} tag={'m7'} onClick={this._onMenuViewClick}/>
            <MenuView renderIcon={require('image!m8') } showText={'功能八'} tag={'m8'} onClick={this._onMenuViewClick}/>
          </View>
        </View>
      </ScrollView>
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
    backgroundColor: '#F5FCFF'
  },
  searchview: {
    height: 50,
    padding: 7
  },
  search: {
    height: 35,
    borderColor: '#ccc',
    paddingLeft: 10,
    borderRadius: 6,
    backgroundColor: '#fff',
    fontSize: 16
  },
  MenuViewView: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'stretch'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14
  }
});

module.exports = HomeWiew;