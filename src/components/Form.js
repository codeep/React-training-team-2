import React, { Component } from 'react';

import Btn from './Btn';

export default class Form extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <span>
                <form id='myForm'>
                    <span className='form'>
                        <h2>delivery address</h2>

                        <input pattern="[A-Za-z]" required type="text" placeholder="name" /><br /><br />
                        <input pattern="[0-9]" required type="text" placeholder="phone" /><br /><br />
                        <input required className="address" type="text" placeholder="address" />
                        <button type="button" className="btn">Open Map</button>
                    </span>
                    <div className='text-center'>
                        <Btn btnTxt='Make pizza' />
                    </div>
                </form>
            </span>
        );
    }
}
