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
  View,
  ToolbarAndroid,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomeView from './Home';
import ItemsWiew from './Items';

//https://www.google.com/design/icons/
class MainWiew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid navIcon={require('image!ic_menu_black_24dp') }
          actions={toolbarActions}
          title="主界面"  subtitle="副标题" style={styles.toolbar}>
        </ToolbarAndroid>
        <TabNavigator  tabBarStyle={styles.navigator}>
          <TabNavigator.Item
            titleStyle={styles.title}
            selected={this.state.selectedTab === 'home'}
            title="主页"
            renderIcon={() => <Image source={require('image!ic_home_white_24dp') } />}
            renderSelectedIcon={() => <Image source={require('image!ic_home_black_24dp') } />}
            onPress={() => this.setState({ selectedTab: 'home' }) }>
            <HomeView/>
          </TabNavigator.Item>
          <TabNavigator.Item
            titleStyle={styles.title}
            selected={this.state.selectedTab === 'list'}
            title="列表"
            renderIcon={() => <Image source={require('image!ic_account_box_white_48dp') } />}
            renderSelectedIcon={() => <Image source={require('image!ic_account_box_black_48dp') } />}
            onPress={() => this.setState({ selectedTab: 'list' }) }>
            <ItemsWiew/>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

var toolbarActions = [
  { title: 'Create', icon: require('image!ic_create_black_48dp'), show: 'always' },
  { title: 'Filter' },
  { title: 'Settings', icon: require('image!ic_settings_black_48dp'), show: 'always' }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
  navigator: {
    height: 60
  },
  title: {
    fontSize: 16
  }
});

module.exports = MainWiew;
