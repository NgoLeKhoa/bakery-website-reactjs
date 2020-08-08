import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap"; 

const footerLogo = require("../images/footer-logo.png");

class Footer extends React.Component {
    render() {
        return(
            <Card className="footer-area">
                <Card.Body>
                    <Row className="footer-area-inner">
                        <Col md={3}>
                            <Card className="footer-area-column">
                                <Card.Body>
                                    <Image src={ footerLogo } className="d-inline-block align-top" alt="logo2" />
                                    <Card.Text className="footer-area-column-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="footer-area-column">
                            <Card.Body>
                                <Card.Title className="footer-area-column-title">Quick links</Card.Title>
                                <Card.Text className="footer-area-column-text">Your Account</Card.Text>
                                <Card.Text className="footer-area-column-text">View Order</Card.Text>
                                <Card.Text className="footer-area-column-text">Privacy Policy</Card.Text>
                                <Card.Text className="footer-area-column-text">Terms & Conditions</Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="footer-area-column">
                            <Card.Body>
                                <Card.Title className="footer-area-column-title">Work Times</Card.Title>
                                <Card.Text className="footer-area-column-text">8:00 a.m – 10:00 p.m</Card.Text>
                                <Card.Text className="footer-area-column-text">Monday – Sunday</Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="footer-area-column"> 
                                <Card.Body>
                                    <Card.Title className="footer-area-column-title">Contact Info</Card.Title>
                                    <Card.Text className="footer-area-column-text">(1800) 574 9687</Card.Text>
                                    <Card.Text className="footer-area-column-text">Justshiop Store<br />256, baker Street,, New Youk, 5245</Card.Text>
                                    <Card.Text className="footer-area-column-text">cakebakery@contact.co.in</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default Footer;