import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

class Btn extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button type='submit' className='btn2'>{this.props.btnTxt}</Button>);
    }
}
Btn.propTypes = {
 btnTxt: PropTypes.string
};

export default Btn;
