import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';


export default class ValidateProps extends Component {
    render() {
        const { year, label } = this.props;
        return(
            <Text>  
            { label }
            { year } 
            </Text>
        )
    }
}


// Set default props
ValidateProps.defaultProps = {
    label: 'Year: ' 
  };


ValidateProps.propTypes = {  
    year: PropTypes.number.isRequired 
};