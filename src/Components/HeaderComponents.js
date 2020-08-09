
import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Button, NavLink
} from 'reactstrap';
import { Collapse } from 'reactstrap';
import './header.css';
import firebase, { auth, provider } from '../firebase.js'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,


        };

        this.toggleNav = this.toggleNav.bind(this);


    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }



    render() {
        return (
            <div>
                <React.Fragment>
                    <Navbar dark color="#d81b60" expand="md" className="navbar" >

                        <div className="container">
                            <NavbarBrand className="ml-1" href="/"><div> </div>MentalAid <span></span> </NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} />

                            <Collapse isOpen={this.state.isNavOpen} navbar >
                                <Nav navbar className="item">
                                    <NavItem active >
                                        <NavLink href="/Journal">
                                            <span className="fa fa-home fa-lg"></span> Notes </NavLink>
                                    </NavItem>
                                    <NavItem active>
                                        <NavLink href="/Tasks"><span className="fa fa-list fa-lg"></span> Tasks </NavLink>
                                    </NavItem>
                                    <NavItem active>
                                        <NavLink href="/Games" ><span className="fa fa-info fa-lg"></span> Play </NavLink>
                                    </NavItem>
                                    <NavItem active>
                                        <NavLink href="/discussions"  ><span className="fa fa-info fa-lg"></span> Discussion </NavLink>
                                    </NavItem>
                                     <NavItem active>
                                        <NavLink href="/Mood"  ><span className="fa fa-info fa-lg"></span> MoodTracker </NavLink>
                                    </NavItem>
                                      <NavItem active>
                                        <NavLink href="/Inspire"  ><span className="fa fa-info fa-lg"></span> Inspire </NavLink>
                                    </NavItem>

                                </Nav>

                                <Nav className="ml-auto" navbar>

                                    <NavItem>
                                        {
                                            this.props.user ?

                                            <button className = "circle" onClick =  {this.props.logout} > Logout </button>
                                            :
                                            <button  className = "circle" onClick =  {this.props.login} > Login </button>

                                        }                                                                                
                                        
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                </React.Fragment>
             </div>
        )
    }
}


export default Header;