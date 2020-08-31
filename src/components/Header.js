import React, {useState} from "react";
import { Navbar, Container } from "react-bootstrap"; 
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
    const [modalShow, setModalShow] = useState(false);
    return(
        <Navbar variant="light" className="shadow-sm bg-white rounded fixed-top">
            <Container >
                <Logo />
                <Navigation />
            </Container>   
        </Navbar>
    )
};

export default Header;