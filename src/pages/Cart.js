import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import CartTable from "../components/CartTable";
import CartTotal from "../components/CartTotal";

function Cart() {
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

    const onChangeQuantityAndPrice = (anItemID, value) => {
        let sumPrice = 0;
        let totalAmount = 0;
        let items = cart.items;

        items.forEach(item => {
            if (item.id === anItemID) {
                item.quantity = value
                item.price = item.unitPrice * value
            }
            totalAmount += item.quantity
            sumPrice += item.price
            return (totalAmount, sumPrice)
        })
        setCart({ ...cart, items: items, totalQuantity: totalAmount, totalPrice: sumPrice })
        localStorage.setItem("cart", JSON.stringify({ ...cart, items: items, totalQuantity: totalAmount, totalPrice: sumPrice }))
    }

    const onRemoveItem = (itemID) => {
        let sumPrice = 0;
        let totalAmount = 0;
        let items = cart.items;
        let restItems = items.filter(item => item.id !== itemID)
        restItems.forEach(restItem => {
            totalAmount += restItem.quantity
            sumPrice += restItem.price
            return (totalAmount, sumPrice)
        })
        if (totalAmount === 0 || sumPrice === 0) {
            setCart({ ...cart, items: [], totalQuantity: 0, totalPrice: 0 })
            localStorage.removeItem("cart")
        } else {
            setCart({ ...cart, items: restItems, totalQuantity: totalAmount, totalPrice: sumPrice })
            localStorage.setItem("cart", JSON.stringify({ ...cart, items: restItems, totalQuantity: totalAmount, totalPrice: sumPrice }))
        }
        
    }

    const onRemoveAllItems = () => {
        setCart({ ...cart, items: [], totalQuantity: 0, totalPrice: 0 })
        localStorage.removeItem("cart")
    }

    const onProceedToCheckout = () => {
        let items = cart.items;
        let restItems = items.filter(item => item.quantity !== 0)
        setCart({ ...cart, items: restItems})
        localStorage.setItem("cart", JSON.stringify({ ...cart, items: restItems}))
    }
    return (
        <>
            <div >
				<Image src={require("../images/banner/banner-bg.jpg")} alt="banner" />
				<h1 className="text-shop-h1">Cart</h1>
				<Link to="/">
					<h6 className="text-shop-h6" >Home</h6>
				</Link>
			</div>
            <Container className="mb-5" style={{minHeight:"1000px"}}>
            <Row>
                <Link to="/shop" style={{ textDecoration: "none" }}>
                    <div className="go-to-page">
                        <span><FontAwesomeIcon icon={faArrowLeft} style={{ width: "100px" }} /></span>
                        Back To Shop
                    </div>
                </Link>
            </Row>
            {cart.items.length === 0
                ? <h2 className="text-center">Your cart is Empty</h2>
                : <Row>
                    <Col md={12}>
                            <CartTable 
                                items={cart.items} 
                                onChangeQuantityAndPrice={onChangeQuantityAndPrice} 
                                onRemoveItem={onRemoveItem}
                                onRemoveAllItems={onRemoveAllItems} 
                                totalPrice={cart.totalPrice}
                                totalQuantity={cart.totalQuantity}
                            />
                    </Col>
                    <Col md={7}></Col>
                    <Col md={5}>
                        <CartTotal totalPrice={cart.totalPrice} onProceedToCheckout={onProceedToCheckout} />
                    </Col>
                </Row>
            }
        </Container>	
        </>
        
    )
}
export default Cart;