import React, { useState } from "react";
import { Navbar, Container, Image, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
const logo2 = require("../images/logo-2.png");

function Header() {
    // const [modalShow, setModalShow] = useState(false);
    return (
        <Container>
            <Navbar className="justify-content-between" expand="lg">
                <Navbar.Brand>
                    <Link to="/">
                        <Image
                            src={logo2}
                            alt="logo2"
                            className="d-inline-block align-top"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav>
                            <NavLink
                                to="/"
                                className="nav-title"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#f195b2",
                                    textDecoration: "none",
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/shop"
                                className="nav-title"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#f195b2",
                                    textDecoration: "none",
                                }}
                            >
                                Shop
                            </NavLink>
                            <NavLink
                                to="/cart"
                                className="nav-title"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#f195b2",
                                    textDecoration: "none",
                                }}
                            >
                                Cart
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className="nav-title"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#f195b2",
                                    textDecoration: "none",
                                }}
                            >
                                Contact Us
                            </NavLink>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;
