/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
   Navigator,
   View,
   Text
} from 'react-native';
import MainView from './views/Main' ;
import LoginView from './views/Login' ;

class ReactNativeSample extends Component {
  configureScene(route){
    return Navigator.SceneConfigs.FadeAndroid;
  }

  renderScene(route, navigator){
    if(route.name === 'main'){
      return (
        <MainView navigator={navigator} route={route}/>
      );
    }
    else if(route.name === 'login'){
      return (
        <LoginView navigator={navigator} route={route}/>
      );
    };
  }

  render() {
    return (
      <Navigator initialRoute={{name: 'login'}}
      configureScene={this.configureScene}
      renderScene={this.renderScene} />
    );
  }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
