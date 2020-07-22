import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simple from './components/Simple'
import Counter from './components/Counter'
import EvenOdd from './components/EvenOdd'
import Plataform from './components/Plataform'
import Event from './components/Event'
import ValidateProps from './components/ValidateProps'
import {Inverter, MegaSena} from './components/Multiple'

export default createDrawerNavigator({
    Event: {
        screen: () => <Event></Event>,
        navigationOptions: { title: "Event" }
    },
    ValidateProps: {
        screen: () => <ValidateProps  label='test: ' year={1999}></ValidateProps>,
        navigationOptions: { title: "Validate Props" }
    },
    Plataform: {
        screen: () => <Plataform number={6}></Plataform>,
        navigationOptions: { title: "Plataform" }
    },
    Counter: {
        screen: () => <Counter number={6}></Counter>,
        navigationOptions: { title: "Counter" }
    },
    MegaSena: {
        screen: () => <MegaSena numbers={6}></MegaSena>,
        navigationOptions: { title: "Mega Sena" }
    },
    Inverter: {
        screen: () => <Inverter text='Hello World'></Inverter>,
        navigationOptions: { title: "Inverter Text" }
    },
    EvenOdd: {
        screen: () => <EvenOdd number={6}></EvenOdd>,
        navigationOptions: { title: "Even or Odd" }
    },
    Simple: {
        screen: () => <Simple text='Hello World'></Simple>,
        navigationOptions: { title: "Simple Text" }
    },
}, { drawerWidth: 300 });