import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Logo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>{this.props.txt}</span>
        );
    }
}

Logo.propTypes = {
 txt: PropTypes.string
};

export default Logo;
