import React, { Component } from 'react';
import { ButtonToolbar, Button, Modal } from 'react-bootstrap';

export default class MenuItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleHide() {
        this.setState({ show: false });
    }

    render() {
        return (<div>
                <div className='col-lg-4'>
                    <div className='MenuItem'>
                        <img src={this.props.img} />
                        <p className='ItemTitle'>{this.props.title}</p>
                        <p>{this.props.comment}</p>
                        <p className='ItemPrice'>{this.props.price}</p>
                        <button className='btn' type='button' onClick={this.handleShow}>Add</button>
                <ButtonToolbar>
                    <Modal
                        {...this.props}
                        show={this.state.show}
                        onHide={this.handleHide}
                        dialogClassName="custom-modal"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-lg">
                                Modal heading
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>Wrapped Text</h4>
                            <p>
                                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                                unde commodi aspernatur enim, consectetur. Cumque deleniti
                                temporibus ipsam atque a dolores quisquam quisquam adipisci
                                possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
                                quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleHide}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </ButtonToolbar>
                </div>
            </div>
            </div>
            );
    }
}
