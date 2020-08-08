import React from "react";
import { ListGroup, Form, Col, Row, Image } from "react-bootstrap";

const checkoutCard = require("../images/checkout-card.png");

function Order(props) {
    const elmOrderItem = props.items.map(
        item => {
            return (
                <Row key={item.id}>
                    <Col md={9}>
                        <div style={{ float: "left" }}>
                            <span >{item.name} <strong>X {item.quantity}</strong></span>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div style={{ float: "right" }}>
                            <span ><strong>$&nbsp;{item.price}.00</strong></span>
                        </div>
                    </Col>
                </Row>
            )
        })

    return (
        <ListGroup>
            <ListGroup.Item>
                <ListGroup variant="flush">
                    <ListGroup.Item >
                        <Row>
                            <Col md={9}>
                                <div style={{ float: "left" }}>
                                    <span style={{ fontWeight: "bold" }}>PRODUCT</span>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div style={{ float: "right" }}>
                                    <span style={{ fontWeight: "bold" }}>TOTAL</span>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        {elmOrderItem}
                        <br />
                        <Row>
                            <Col md={9}>
                                <div style={{ float: "left" }}>
                                    <span><strong>Shipping Fee</strong></span>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div style={{ float: "right" }}>
                                    <span><strong>Free</strong></span>
                                </div>
                            </Col>
                        </Row>
                        <br />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col md={9}>
                                <div style={{ float: "left" }}>
                                    <span><strong>TOTAL</strong></span>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div style={{ float: "right" }}>
                                    <span><strong>$&nbsp;{props.totalPrice}.00</strong></span>
                                </div>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form>
                            <fieldset>
                                <Form.Group as={Row}>
                                    <Col md={10}>
                                        <Form.Check name="rdbtn" type="radio" label="Cash On Delivery (COD)" />
                                        <Form.Check name="rdbtn" type="radio" label="Direct Bank Transfer (ATM)" />
                                        <div style={{ display: "flex" }}>
                                            <Form.Check name="rdbtn" type="radio" label="Paypal" />
                                            <Image src={checkoutCard} style={{ marginLeft: "10px" }} />
                                        </div>
                                    </Col>
                                </Form.Group>
                            </fieldset>
                        </Form>
                    </ListGroup.Item>
                </ListGroup>
            </ListGroup.Item>
        </ListGroup>
    )
}


export default Order;