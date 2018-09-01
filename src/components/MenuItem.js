import React, { Component } from 'react';
	
class MenuItem extends Component {

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
 price: PropTypes.string
};
export default MenuItem;