import React, { Component } from 'react';


import Btn from './Btn';
import {Form, Input, Button } from 'reactstrap';

export default class MyForm extends Component {
    constructor() {
        super();
    }

    render() {
        return ( <Form id='myForm'>
                    <span className='form'>
                        <h2>delivery address</h2>
                        <Input pattern="[A-Za-z]" required type="text" placeholder="name" /><br /><br />
                        <Input pattern="[0-9]" required type="text" placeholder="phone" /><br /><br />
                        <Input required className="address" type="text" placeholder="address" />
                        <Button type="button" className="btn">Open Map</Button>
                    </span>
                    <div className='text-center'>
                        <Btn btnTxt='Make pizza' />
                    </div>
                </Form>

        );
    }
}
