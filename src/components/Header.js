import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap"; 
import Logo from "./Logo";
import Navigation from "./Navigation";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
    const [ isNavDisplay, setIsNavDisplay ]= useState(false);
    const onUpdateNav = (isToggled) => {
        setIsNavDisplay(!isToggled);
    };
    return(
        <Navbar variant="light" className="shadow-sm bg-white rounded">
            <Container >
                <Logo />
                <Navigation isNavDisplay={ isNavDisplay }/>
                <HamburgerMenu onUpdateNav={ onUpdateNav }/>
            </Container>   
        </Navbar>
    )
};

export default Header;