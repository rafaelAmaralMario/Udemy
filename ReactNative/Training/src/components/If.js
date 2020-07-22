import React, { Component } from 'react';

export default class If extends Component {



    render () {
        const { test, children } = this.props;
        if(test) {
            return children;
        } else {
            return null;
        }
    }
}