import React, { Component } from 'react';

import Author from './Author';
import Comments from './Comments';

import {
    StyleSheet,
    View,
    Image,
    Dimensions
} from 'react-native';

import { getWidth, getHeight } from '../utils/utils'

class Post extends Component {
    render() {
        console.log(styles)
        return (
        <View style={styles.container} >
            <Image source={this.props.image} style={styles.image}></Image>            
            <Author email="contact@rafaelmario.dev"  nickname="Rafael Mario"/>
            <Comments comments={this.props.comments}/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
   
    image: {
        height: getWidth() * (3/4),
        width: getWidth(),
        resizeMode: 'contain'
    },
   
})

export default Post;