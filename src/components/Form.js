import React, { Component } from 'react';


import Btn from './Btn';
import {Form, Input, Button } from 'reactstrap';

export default class MyForm extends Component {
    constructor() {
        super();
    }

    render() {
        return (
                <Form id='myForm'>
                    <div className='form'>
                        <h2>delivery address</h2>
                        <input pattern="[A-Za-z]" required type="text" placeholder="name" /><br /><br />
                        <input pattern="[0-9]" required type="text" placeholder="phone" /><br /><br />
                        <input required className="address" type="text" placeholder="address" />
                        <button type="button" className="btn">Open Map</button>
                    </div>
                    <div className='text-center'>
                        <Btn btnTxt='Make pizza' />
                    </div>
                </Form>

        );
    }
}
