import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Btn from './Btn';

export default class Form extends Component {
    constructor() {
        super();
    }

    render() {
        return (
			<div>
            <div className='text-center'>
                <Form id='myForm'>
                    <div className='form'>
                        <h2>delivery address</h2>
                        <input pattern="[A-Za-z]" required type="text" placeholder="name" /><br /><br />
                        <input pattern="[0-9]" required type="text" placeholder="phone" /><br /><br />
                        <input required className="address" type="text" placeholder="address" />
                        <button type="button" className="btn">Open Map</button>
                    </div>
                    <div className='text-center mb-3'>
						<Link to='/'><Btn btnTxt='Make pizza' /></Link>
                    </div>
                </Form>
            </div>
			<div className='history'>
				<span className='span spanActiv'><i className='fas fa-check'></i></span>
				<span className='line'></span>
				<span className='span spanActiv'>2</span>
				<span className='line'></span>
				<span className='span'>3</span>
			</div>
			</div>
        );
    }
}
