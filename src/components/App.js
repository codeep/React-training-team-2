import React, { Component } from 'react';

// COMPONENTS


import Menu from './Menu';

import MyForm from './Form';
import MyNavbar from './Navbar';


export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className='logo'>
                    <MyNavbar/>
                </div>
                <div className='text-center'>
                    <MyForm />
                </div>
                <div className='text-center'>
                    <Menu />
                </div>

            </div>
        );
    }
}
