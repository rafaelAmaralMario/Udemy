import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import pattern from '../style/pattern';


export default class Event extends Component {

    state = {
        text: null
    }

    changeText = (text) => {
        this.setState({ text });
    }

    render() {
        return (
            <View>
                <Text style={ pattern.font40 }>Change the Text: {this.state.text}</Text>
                <TextInput value={this.state.text} style={pattern.input} onChangeText={this.changeText}></TextInput>
            </View>
        );
    }
}