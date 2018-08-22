import React, { Component } from 'react';

export default class Btn extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <button type="button" className="btn2">{this.props.txt}</button>
        );
    }
}
