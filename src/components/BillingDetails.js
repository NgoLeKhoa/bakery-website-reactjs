import React, { useState } from "react";
import { Form, Button, Col, Modal } from "react-bootstrap";
// import {Switch, Redirect, Route} from "react-router-dom";
// import Home from "../pages/Home";

function BillingDetails(props) {
    const [orderForm, setOrderForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        addtions: "",
        date: (new Date()).toLocaleDateString(),
        cart: JSON.parse(localStorage.getItem("cart")),
    })
    const [show, setShow] = useState(false);

    const onHandleClose = () => setShow(false);
    const onHandleShow = () => setShow(true);

    const onHandleChange = (e) => {
        setOrderForm({ ...orderForm, [e.target.name]: e.target.value })
    }

    const onHandleSubmit = (e) => {
        e.preventDefault()
        props.onPlaceOrder(orderForm)
    }

    return (
        <>
            <Form onSubmit={onHandleSubmit}>
                <Form.Group >
                    <Form.Label>Name *</Form.Label>
                    <Form.Control name="name" value={orderForm.name} type="text" placeholder="Enter name" onChange={onHandleChange} required />
                    <Form.Text className="text-muted">* is required</Form.Text>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Email *</Form.Label>
                        <Form.Control name="email" value={orderForm.email} type="email" placeholder="Enter email" onChange={onHandleChange} required />
                        <Form.Text className="text-muted">* is required</Form.Text>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Phone *</Form.Label>
                        <Form.Control name="phone" value={orderForm.phone} type="tel" placeholder="Enter phone" onChange={onHandleChange} required />
                        <Form.Text className="text-muted">* is required</Form.Text>
                    </Form.Group>
                </Form.Row>

                <Form.Group >
                    <Form.Label>Address *</Form.Label>
                    <Form.Control name="address" value={orderForm.address} type="text" placeholder="Enter address" onChange={onHandleChange} required />
                    <Form.Text className="text-muted">* is required</Form.Text>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Notes</Form.Label>
                    <Form.Control name="addtions" value={orderForm.addtions} as="textarea" rows="3" placeholder="Enter additions (optional)" onChange={onHandleChange} />
                </Form.Group>

                <Button variant="primary" type="submit" className="btn btn-lg btn-block" onClick={onHandleShow}>
                    Place Order
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
                    Your order is successfully placed. Please wait for delivery
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

export default BillingDetails;
