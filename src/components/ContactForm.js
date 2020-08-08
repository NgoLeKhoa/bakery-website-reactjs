import React, { useState } from "react";
import { Col, Form, Button, Modal } from "react-bootstrap";

function ContactForm(props) {

    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        subject: "",
        details: "",
    })

    const [show, setShow] = useState(false);

    const onHandleClose = () => setShow(false);
    const onHandleShow = () => setShow(true);

    const onChange = (e) => {
        setContactForm({ ...contactForm, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmitContactForm(contactForm)
    }

    return (
        <>
            <Form onSubmit={(e) => onSubmit(e)}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control 
                            name="name" 
                            value={contactForm.name} 
                            type="text" 
                            placeholder="Name" 
                            onChange={(e) => onChange(e) }
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control 
                            name="email" 
                            value={contactForm.email} 
                            type="text" 
                            placeholder="Email" 
                            onChange={(e) => onChange(e) }
                        />
                    </Form.Group>

                </Form.Row>

                <Form.Group >
                    <Form.Control 
                        name="subject" 
                        value={contactForm.subject} 
                        type="text" 
                        placeholder="Subject" 
                        onChange={(e) => onChange(e) }
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Control 
                        name="details" 
                        value={contactForm.details} 
                        as="textarea" 
                        rows="5" 
                        placeholder="Details" 
                        onChange={(e) => onChange(e) }
                    />
                </Form.Group>

                <Button 
                    variant="success" 
                    type="submit" 
                    className="btn btn-lg btn-block"
                    onClick={onHandleShow}
                >
                    Submit Now
                </Button>
            </Form>
            <Modal
                show={show}
                onHide={onHandleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thank you for your idea. Have a good day.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHandleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ContactForm;