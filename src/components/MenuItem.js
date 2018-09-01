import React, { Component } from 'react';


export default class MenuItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='col-lg-4'>
                <div className='MenuItem'>
                    <img src={this.props.img} />
                    <p className='ItemTitle'>{this.props.title}</p>
                    <p>{this.props.comment}</p>
                    <p className='ItemPrice'>{this.props.price}</p>
                    <button type="button" className="btn" data-toggle="modal" data-target="#exampleModal">
                       Add
                    </button>
                </div>
            </div>
        );
    }
}