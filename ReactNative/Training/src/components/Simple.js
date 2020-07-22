import React from 'react';
import { Text } from 'react-native';

import Pattern from '../style/pattern';

export default function(props) {
    return <Text style={[Pattern.ex]}>{ props.text }</Text>;
}