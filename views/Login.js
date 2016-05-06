'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  ScrollView,
  View,
  PixelRatio,
  Alert
} from 'react-native';

import store from 'react-native-simple-store';

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false
    };
  }

  componentWillMount() {
    store.get('username').then(username => {
      if(username!==undefined){
          this.props.navigator.push({ name: 'main' });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headtitle}>登录</Text>
        </View>
        <View style={styles.avatarview}>
          <Image source={require('image!login') } style={styles.avatarimage}/>
        </View>
        <View style={styles.inputview}>
          <TextInput style={styles.textinput} placeholder='用户名'
            onChangeText={(text) => this.setState({ username: text }) }/>
          <View style={styles.dividerview}>
            <Text style={styles.divider}></Text>
          </View>
          <TextInput style={styles.textinput} placeholder='密码'
            password={true}  onChangeText={(text) => this.setState({ password: text }) }/>
        </View>
        <View style={styles.bottomview}>
          <TouchableHighlight underlayColor="#fff" style={styles.buttonview} onPress={() => this._login() }>
            <Text style={styles.logintext}>登 录</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  _login() {
    var username = this.state.username;
    var password = this.state.password;
    if (username === '123' && password === '123') {
      store.save('username', {
        username: username
      });
      this.props.navigator.push({ name: 'main' });
    }
    else {
      store.save('username', {
        username: undefined
      });
      Alert.alert('提示', '用户名或口令错误!');
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    height: 50,
    justifyContent: 'center',
  },
  headtitle: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#000000',
  },
  avatarview: {
    height: 100,
    backgroundColor: '#ECEDF1',
    justifyContent: 'center',
  },
  avatarimage: {
    width: 110,
    height: 100,
    alignSelf: 'center'
  },
  inputview: {
    height: 100
  },
  textinput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 20
  },
  dividerview: {
    flexDirection: 'row',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ECEDF1'
  },
  bottomview: {
    backgroundColor: '#ECEDF1',
    flex: 1,
  },
  buttonview: {
    backgroundColor: '#1DBAF1',
    margin: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logintext: {
    fontSize: 17,
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 10,
  }
});

module.exports = LoginView;
