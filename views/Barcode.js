'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    ToolbarAndroid,
    View,
    Alert
} from 'react-native';

import BarcodeScanner from 'react-native-barcodescanner';

class BarCodeWiew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            torchMode: 'off',
            cameraType: 'back',
        };
    }
    
    _onIconClicked() {
        _navigator.pop();
    }

    _barcodeReceived(e) {
        console.log('Barcode: ' + e.data);
        console.log('Type: ' + e.type);
        Alert.alert('提示', '二维码:type' +  e.type + '  date:' +  e.data); 
        _navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid navIcon={require('image!ic_arrow_back_black_24dp') }
                    title="扫码" style={styles.toolbar} onIconClicked={this._onIconClicked}>
                </ToolbarAndroid>
                <BarcodeScanner
                    onBarCodeRead={this._barcodeReceived}
                    style={{ flex: 1 }}
                    torchMode={this.state.torchMode}
                    cameraType={this.state.cameraType}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: { 
      flex: 1, 
      backgroundColor: 'red'
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  }
});

module.exports = BarCodeWiew;