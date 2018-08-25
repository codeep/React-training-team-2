import React, { Component } from 'react';

export default class MenuItem extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='col-lg-4'>
                <div className='MenuItem'>
                    <img src={this.props.img} />
                    <p className='ItemTitle'>{this.props.title}</p>
                    <p>{this.props.comment}</p>
                    <p className='ItemPrice'>{this.props.price}</p>
                    <button className='btn' type='button'>Add</button>
                </div>
            </div>
            );
    }
}
