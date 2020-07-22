import React, { Component } from 'react';

import { StyleSheet, Text, View, Alert } from 'react-native';

import { Gravatar } from 'react-native-gravatar';

import { getWidth, getHeight } from '../utils/utils'


class Comments extends Component {
    render() {
        let view = null;

        if(this.props.comments) {
            view = this.props.comments.map( (item, index) =>{
                return (
                    <View style={styles.commentContainer} key={index}>
                        <Text style={styles.nickname}> {item.nickname}</Text>
                        <Text style={styles.comment}> {item.comment}</Text>
                    </View>
                )
            })
        }

        return(
            <View style={styles.container}>
                {view}
            </View>
        )

        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop:5,
        padding:5
    },
    nickname: {
        color: '#444',
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    comment: {
        color: '#777',
        fontSize: 15,
        marginLeft: 10,
    }
})

export default Comments;