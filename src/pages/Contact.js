import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {Link} from "react-router-dom";
import ContactForm from "../components/ContactForm";
import AddressContact from "../components/AddressContact";
import GoogleMaps from "../components/GoogleMaps";

function Contact() {
    const [contactForms, setContactForms] = useState([])
    const onSubmitContactForm = (contactForm) => {
        if (contactForm !== "") {
            contactForms.push(contactForm)
            setContactForms(contactForms)
            localStorage.setItem("contactForms", JSON.stringify(contactForms))
        }
    }
    return (
        <>
            <div >
                <Image className="mt-5" src={require("../images/banner/banner-bg.jpg")} alt="banner" />
                <h1 className="text-shop-h1">Contact Us</h1>
                <Link to="/">
                    <h6 className="text-shop-h6" >Home</h6>
                </Link>
            </div>
            <Container className="mb-5">
                <h1>Get In Touch</h1>
                <p style={{ fontSize: "20px" }}>
                    Do you have anything in your mind to let us know?
                    Kindly don't delay to connect to us by means of our contact form.
            </p>
                <br />
                <Row>
                    <Col md={7} style={{ marginTop: "30px" }}>
                        <ContactForm onSubmitContactForm={onSubmitContactForm} />
                    </Col>
                    <Col md={5}>
                        <AddressContact />
                    </Col>
                </Row>
                <GoogleMaps />
            </Container>
        </>

    )
}

export default Contact;