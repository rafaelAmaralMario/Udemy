import React from 'react';
import { View,Text } from 'react-native';
import Pattern from '../style/pattern';

function renderEvenOrOdd(props)  {
    return props.number % 2 === 0 ? <Text>{props.number}  is Even</Text>  : <Text> {props.number} is Odd </Text> 
}

export default  props => {

        return(

            <View style={[Pattern.ex]}>
                { renderEvenOrOdd(props) }
            </View>
        )
    

} 