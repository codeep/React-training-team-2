import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Btn extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button type='submit' className='btn2'>{this.props.btnTxt}</Button>);
    }
}
