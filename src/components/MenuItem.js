import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MenuItem extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className='col-lg-4' id={this.props.key}>
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

MenuItem.propTypes = {
 img: PropTypes.string,
 title: PropTypes.string,
 comment: PropTypes.string,
 price: PropTypes.string,
 key: PropTypes.string
};
export default MenuItem;
