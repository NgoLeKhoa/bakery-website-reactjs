import React from 'react';
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
const logo2 = require("../images/logo-2.png");

function Logo() {
    return (
        <Link to="/">
            <Image src={logo2} className="d-inline-block align-top" alt="logo2" />
        </Link>  
    )
}

export default Logo;