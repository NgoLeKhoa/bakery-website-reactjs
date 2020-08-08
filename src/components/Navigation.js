import React from 'react';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation(props) {
    const {isNavDisplay} = props;
    return (
        isNavDisplay && <Nav className="nav-position ">
            <Link to="/" >
                <span className="nav-title">Home</span>
            </Link>
            <Link to="/shop" >
                <span className="nav-title">Shop</span>
            </Link>
            <Link to="/cart" >
                <span className="nav-title">Cart</span>
            </Link>
            <Link to="/contact" >
                <span className="nav-title">Contact Us</span>
            </Link>
        </Nav>
    )
}

export default Navigation;