import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Simple from './components/Simple'
import EvenOdd from './components/EvenOdd'
import {Inverter, MegaSena} from './components/Multiple'

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.f20}> App!</Text>
				<Simple text='Ninguem te perguntou nada Samir'></Simple>
				<EvenOdd number={5}></EvenOdd>
				<Inverter text='oiraM leafaR' ></Inverter>
				<MegaSena numbers={6} ></MegaSena>
			</View>
		);
	}
}

const styles = StyleSheet.create({
		container: {
			flex: 1, 
			alignItems: "center"
		}, 
		f20: {
			fontSize: 40
		}
});