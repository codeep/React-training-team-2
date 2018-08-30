import React, { Component } from 'react';

export default class Logo extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <span>{this.props.txt}</span>
        );
    }
}