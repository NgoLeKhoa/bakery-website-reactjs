import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import CartTable from "../components/CartTable";
import CartTotal from "../components/CartTotal";

function Cart() {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        let sumPrice = 0;
        let totalAmount = 0;
        if (localStorage && localStorage.getItem("items")) {
            const storedItems = JSON.parse(localStorage.getItem("items"))
            storedItems.forEach(storedItem => {
                sumPrice += storedItem.price
                totalAmount += storedItem.quantity
                return totalAmount, sumPrice
            })
            setTotalQuantity(totalAmount)
            setTotalPrice(sumPrice)
            setItems(storedItems)
        }
    }, [setItems])

    const onChangeQuantityAndPrice = (anItemID, value) => {
        let sumPrice = 0;
        let totalAmount = 0;
        items.forEach(item => {
            if (item.id === anItemID) {
                item.quantity = value
                item.price = item.unitPrice * value
            }
            totalAmount += item.quantity
            sumPrice += item.price
            return totalAmount, sumPrice
        })
        setTotalQuantity(totalAmount)
        setTotalPrice(sumPrice)
        setItems(items)
        localStorage.setItem("items", JSON.stringify(items))
    }

    const onRemoveItem = (itemID) => {
        let sumPrice = 0;
        let totalAmount = 0;
        let restItems = items.filter(item => item.id !== itemID)
        restItems.forEach(restItem => {
            totalAmount += restItem.quantity
            sumPrice += restItem.price
            return totalAmount, sumPrice
        })
        setTotalQuantity(totalAmount)
        setTotalPrice(sumPrice)
        setItems(restItems)
        localStorage.setItem("items", JSON.stringify(restItems))
    }

    const onRemoveAllItems = () => {
        setItems([])
        setTotalPrice(0)
        setTotalQuantity(0)
        localStorage.removeItem("items")
    }

    const onProceedToCheckout = () => {
        let restItems = items.filter(item => item.quantity !== 0)
        setItems(restItems)
        localStorage.setItem("items", JSON.stringify(restItems))
    }
    return (
        <Container className="mt-3 mb-5" >
            <Row>
                <Link to="/shop" style={{ textDecoration: "none" }}>
                    <div className="go-to-page">
                        <span><FontAwesomeIcon icon={faArrowLeft} style={{ width: "100px" }} /></span>
                        Back To Shop
                    </div>
                </Link>
            </Row>
            <Row>
                <Col md={12}>
                    <CartTable 
                        items={items} 
                        onChangeQuantityAndPrice={onChangeQuantityAndPrice} 
                        onRemoveItem={onRemoveItem}
                        onRemoveAllItems={onRemoveAllItems} 
                        totalPrice={totalPrice}
                        totalQuantity={totalQuantity}
                    />
                </Col>
                <Col md={7}></Col>
                <Col md={5}>
                    <CartTotal totalPrice={totalPrice} onProceedToCheckout={onProceedToCheckout} />
                </Col>
            </Row>
        </Container>
    )
}
export default Cart;