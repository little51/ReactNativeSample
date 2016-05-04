'use strict';

import React, {
    Component,
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    PropTypes,
    StyleSheet
} from 'react-native';

class MenuView extends Component {

    static propTypes = {
        renderIcon: PropTypes.object.isRequired,
        showText: PropTypes.string,
        tag: PropTypes.string,
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.showText, this.props.tag);
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick}>
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <Image style={styles.iconImg} source={this.props.renderIcon}/>
                    <Text style={styles.showText}>{this.props.showText}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    iconImg: {
        width: 60,
        height: 60,
        marginBottom: 2
    },
    showText: {
        fontSize: 18
    }
});

module.exports = MenuView;
