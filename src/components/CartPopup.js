import React, { useState } from "react";
import MiniCartTable from "./MiniCartTable";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartPopup(props) {
    const {items, totalQuantity, totalPrice} = props.cart
    const [isDisplayMiniCart, setIsDisplayMiniCart] = useState(false);
    console.log(items)
    const openMiniCart = () => {
        setIsDisplayMiniCart(!isDisplayMiniCart)
    }

    const closeMiniCart = () => {
        setIsDisplayMiniCart(!isDisplayMiniCart)
    }
    return (
        <div>
            <button className="open-mini-cart" onClick={openMiniCart}>
                Check Your Cart &nbsp;
                {totalQuantity !== 0
                    ? <Badge className="cart-popup-quantity" variant="danger">{totalQuantity}</Badge>
                    : ""
                }
            </button>
            <div
                className="form-popup"
                style={{ display: (isDisplayMiniCart === false ? "none" : "block") }}
            >
                <form className="form-container">
                    <h1>Cart</h1>
                    <MiniCartTable items={items} totalPrice={totalPrice} />
                    <Link to="/cart">
                        <button type="submit" className="btn" >Go To Cart</button>
                    </Link>
                    <button type="button" className="btn close-mini-cart" onClick={closeMiniCart}>Close Cart</button>
                </form>
            </div>
        </div>
    )
}

export default CartPopup;