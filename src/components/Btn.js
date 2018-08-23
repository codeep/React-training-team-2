import React, { Component } from 'react';

export default class Btn extends Component {

    constructor() {
        super();
    }

    sub() {
        document.getElementById("myForm").submit();
    }

    render() {
        return (
            <button type="button" onClick={sub} className="btn2">{this.props.btnTxt}</button>
        );
    }
}
