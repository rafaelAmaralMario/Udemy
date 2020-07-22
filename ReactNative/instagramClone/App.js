
import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Header from './src/Components/Header'
import Post from './src/Components/Post'

export default class App extends Component {
  render() {
    const comments = [
      {
        nickname: 'Jason',
        comment: 'AAAAAAAAAHHHHH'
      },
      {
        nickname: 'Fred',
        comment: 'one two fred is comming for you'
      },
      {
        nickname: 'Michael Meyers',
        comment: '...........'
      }
    ]
    return (
      <View style={{flex:1}}>
        <Header />
        <Post  comments={comments} image={require('./assets/imgs/fence.jpg')}/>
      </View>
    );
  }
}


