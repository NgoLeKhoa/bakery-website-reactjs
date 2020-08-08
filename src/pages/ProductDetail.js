import React, {useState, useEffect} from "react";
import {Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import Detail from "../components/Detail";
import CartPopup from "../components/CartPopup";
import products from "../utils/products";

function ProductDetail(props) {
    const [items, setItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        let totalAmount = 0
        let sumPrice = 0
        if (localStorage && localStorage.getItem("items")) {
            let storedItems = JSON.parse(localStorage.getItem("items"))
            storedItems.forEach( storedItem => {
                sumPrice += storedItem.price
				totalAmount += storedItem.quantity
				return sumPrice,totalAmount
            })
            setTotalPrice(sumPrice)
            setTotalQuantity(totalAmount)
            setItems(storedItems)
        }
    }, [localStorage.getItem("items")])

    const onAddToCart = (anItem) => {
        let index = -1
        let totalAmount = 0
        let sumPrice = 0
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
			return sumPrice, totalAmount
        })
        setTotalPrice(sumPrice)
		setTotalQuantity(totalAmount)
		setItems(items)
		localStorage.setItem("items", JSON.stringify(items))
    }


    return(
        <div className="bg-light p-3">
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
            <CartPopup items={items} totalQuantity={totalQuantity} totalPrice={totalPrice}/>
        </div>     
    )
}

export default ProductDetail;