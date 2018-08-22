import React, { Component } from 'react';

export default class Form extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <span>
                <form>
                    <h2>delivery address</h2>

                    <input type="text" placeholder="name" /><br /><br />
                    <input type="text" placeholder="phone" /><br /><br />
                    <input className="address" type="text" placeholder="address" />
                    <button type="button" className="btn">Open Map</button>
                </form>
            </span>
        );
    }
}
