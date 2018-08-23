import React, { Component } from 'react';

// COMPONENTS

import Logo from './Logo';
import Form from './Form';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className='logo'>
                    <Logo txt='Pizza Store' />
                </div>
                <div className='text-center'>
                    <Form />
                </div>
            </div>
        );
    }
}
