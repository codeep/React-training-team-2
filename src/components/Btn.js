import React, { Component } from 'react';

export default class Btn extends Component {

    constructor() {
        super();
    }
<<<<<<< HEAD
    
    render() {
        return (
            <button type='submit' className='btn2'>{this.props.btnTxt}</button>
=======

    sub() {
        document.getElementById('myForm').submit();
    }

    render() {
        return (
            <button type='button' onClick={sub} className='btn2'>{this.props.btnTxt}</button>
>>>>>>> 6793702a416cca6f8f21006d513f61f80fed8179
        );
    }
}
