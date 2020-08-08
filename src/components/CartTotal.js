import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function CartTotal(props) {
    
    const onClick = () => {
        props.onProceedToCheckout()
    }
    return (
        <Card>
            <Card.Header className="font-weight-bold text-uppercase">Cart Total</Card.Header>
            <Card.Body>
                <Card.Title>Total
                    <span style={{ float: "right", fontWeight: "bold" }}>$&nbsp;{props.totalPrice}.00</span>
                </Card.Title>
                <Link to="/checkout">
                    <Button variant="warning" onClick={onClick}>Proceed To Checkout</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}


export default CartTotal;