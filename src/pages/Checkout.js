import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import BillingDetails from "../components/BillingDetails";
import Order from "../components/Order";

function Checkout() {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect (() => {
        let sumPrice = 0;
        const storedItems = JSON.parse(localStorage.getItem("items"))
        storedItems.forEach( storedItem => {
            sumPrice += storedItem.price
            return sumPrice
        })
        setTotalPrice(sumPrice)
        setItems(storedItems)
    }, [setItems])
    
    const onPlaceOrder = (orderForm) => {
        localStorage.setItem("order", JSON.stringify(orderForm))
    }

    return (
        <Container className="mt-3 mb-5">
            <Row>
                <Link to="/cart" style={{ textDecoration: "none" }}>
                    <div className="go-to-page">
                        <span><FontAwesomeIcon icon={faArrowLeft} style={{ width: "100px" }} /></span>
                        Back To Cart
                    </div>
                </Link>
            </Row>
            <Row>
                <Col md={7}>
                    <h2>Billing Details</h2>
                    <BillingDetails onPlaceOrder={onPlaceOrder}/>
                </Col>
                <Col md={5}>
                    <h2>Your Order</h2>
                    <Order items={items} totalPrice={totalPrice}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Checkout;