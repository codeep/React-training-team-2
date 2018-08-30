import React, { Component } from 'react';
import Logo from './Logo';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import '../styles/navbar.css';
import { FaSearch, FaLocationArrow, FaCartPlus, FaInfo, FaMap, FaPhone } from 'react-icons/fa';

export default class MyNavbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="#991C1C" light expand="md" className='navbar'>
                    <NavbarBrand href="/"><Logo txt='Pizza Store' /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem >
                                <NavLink href="#" className='navitem' > <FaSearch color='orange'/> </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#"> <FaLocationArrow color='orange'/>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#"> <FaCartPlus color='orange'/>
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret >
                                    <FaInfo color='orange'/>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Map <FaMap color='grey'/>
                                    </DropdownItem>
                                    <DropdownItem>
                                        Contact Us <FaPhone color='grey'/>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}