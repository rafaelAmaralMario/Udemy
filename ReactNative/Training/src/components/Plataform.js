import React, { Component } from 'react';
import { Button, Alert, ToastAndroid, Platform } from 'react-native';


export default class Counter extends Component {

    notify = (msg) => {
        if(Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG)
        } else {
            Alert.alert('Informação', msg)
        }
    }

    render() {
        return(
            <Button title='Which Platform?' onPress={() => this.notify('OH MY GOOOOOOOOOOOOOOOOOOOOOD!!')}></Button>
        )
    }
}