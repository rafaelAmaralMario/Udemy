import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform
} from 'react-native';

import icon from '../../assets/imgs/icon.png'
import { defineIOSValue } from '../utils/utils'
class Header extends Component {
    render() {
        return (
        <View style={styles.container} >
            <View style={styles.rowContainer}>
                <Image source={icon} style={styles.image}></Image>
                <Text style={styles.title}>Rafaelstagran</Text>
            </View>
        </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        marginTop: defineIOSValue(20,0),
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB'

    },
    rowContainer : {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height:30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        fontSize: 28,
        fontFamily: 'shelter',
        height: 30
    }
})

export default Header;