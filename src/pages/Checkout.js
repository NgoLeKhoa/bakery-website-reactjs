import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import BillingDetails from "../components/BillingDetails";
import Order from "../components/Order";

function Checkout() {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let sumPrice = 0;
        const storedItems = JSON.parse(localStorage.getItem("items"))
        storedItems.forEach(storedItem => {
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
        <>
            <div >
                <Image className="mt-5" src={require("../images/banner/banner-bg.jpg")} alt="banner" />
                <h1 className="text-shop-h1">Checkout</h1>
                <Link to="/">
                    <h6 className="text-shop-h6" >Home</h6>
                </Link>
            </div>
            <Container className="mb-5" style={{ minHeight: "800px" }}>
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
                        <BillingDetails onPlaceOrder={onPlaceOrder} />
                    </Col>
                    <Col md={5}>
                        <h2>Your Order</h2>
                        <Order items={items} totalPrice={totalPrice} />
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default Checkout;