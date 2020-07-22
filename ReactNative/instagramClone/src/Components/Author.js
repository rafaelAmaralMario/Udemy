import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { Gravatar } from 'react-native-gravatar'

class Author extends Component {
    render() {
        console.log(this.props)
        return (
        <View style={styles.container} >
           <Gravatar style={styles.avatar} options={{ email: this.props.email, secure: true }}></Gravatar>
           <Text style={styles.nickname}> {this.props.nickname}</Text>
        </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    avatar: {
        height:30,
        width: 30,
        resizeMode: 'contain'
    },
    nickname: {
        color: '#444',
        fontSize: 15,
        marginVertical: 10,
        fontWeight: 'bold'
    }
})

export default Author;