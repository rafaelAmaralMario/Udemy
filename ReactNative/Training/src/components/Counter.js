import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';


export default class Counter extends Component {
    state = {
        number: this.props.number
    }
    
    inc = () => {
        this.setState({number: this.state.number +1})
    }

    dec = () => {
        this.setState({number: this.state.number * this.state.number})
    }

    render() {
        const { number } = this.state;
        return(
            <View>
                <Text style={ {fontSize: 40} }> Text Counter { number } </Text>
                <TouchableHighlight onPress={this.inc} onLongPress={this.dec}> 
                    <Text> Inc </Text>
                </TouchableHighlight>
            </View>
        )
    }
}