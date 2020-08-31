import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import BillingDetails from "../components/BillingDetails";
import Order from "../components/Order";

function Checkout() {
    const [cart, setCart] = useState({
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
    });

    useEffect(() => {
        if (localStorage && localStorage.getItem("cart")) {
			const storedCart = JSON.parse(localStorage.getItem("cart"))
			setCart(storedCart)
		} else {
			setCart({ ...cart, items: [], totalQuantity: 0, totalPrice: 0 })
		}
    }, [setCart])

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
                        <Order items={cart.items} totalPrice={cart.totalPrice} />
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default Checkout;