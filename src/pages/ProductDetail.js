import React, {useState, useEffect} from "react";
import {Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import Detail from "../components/Detail";
import CartPopup from "../components/CartPopup";
import products from "../utils/products";

function ProductDetail(props) {
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

    const onAddToCart = (anItem) => {
        let index = -1
        let totalAmount = 0
        let sumPrice = 0
        let items = cart.items
		items.forEach((item, idx) => {
			if (item.id === anItem.id) {
				index = idx;
			}
			return index
		});
		if (index !== -1) {
			const item = items[index];
			item.quantity += anItem.quantity
			item.price += anItem.price 
		} else {
			items.push(anItem);
		}
		items.forEach( item => {
            sumPrice += item.price
			totalAmount += item.quantity
			return (sumPrice, totalAmount)
        })
        setCart({ ...cart, items: items, totalQuantity: totalAmount, totalPrice: sumPrice })
		localStorage.setItem("cart", JSON.stringify({ ...cart, items: items, totalQuantity: totalAmount, totalPrice: sumPrice }))
    }

    return(
        <div className="bg-light mt-5 pt-5 pb-5">
            <Container>
                <div style={{ display: "flex", justifyContent:"space-between"}}>
                    <Link to="/shop" style={{ textDecoration: "none"}}>
                        <div className="go-to-page">
                            <span><FontAwesomeIcon icon={faArrowLeft} style={{width:"100px"}}/></span>
                            Back To Shop
                        </div>
                    </Link>
                    <Link to="/cart" style={{ textDecoration: "none"}}>
                        <div className="go-to-page">
                            Go To Cart
                            <span><FontAwesomeIcon icon={faArrowRight} style={{width:"100px"}}/></span>
                        </div>
                    </Link>  
                </div>
                <Detail {...props} products={products} onAddToCart={onAddToCart}/>
            </Container>  
            <CartPopup cart={cart}/>
        </div>     
    )
}

export default ProductDetail;