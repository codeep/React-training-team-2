import React, { Component } from 'react';

// COMPONENTS



import Header from './Header';
import Main from './Main';



export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header />
                <Main />   
            </div>
        );
    }
}
