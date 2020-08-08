import React from 'react'
import { Link } from "react-router-dom";

function MiniCartTable(props) {
    const elmItem = props.items.map(
        item => {
            return (
                <div className="minicart-table" key={item.id}>
                    <Link to={"/product-detail/" + item.id}>
                        <div>
                            <img className="minicart-img" src={item.img} alt={item.name} />
                        </div>
                    </Link>
                    <div className="minicart-text-container">
                        <div className="minicart-name">{item.name}</div>
                        <div className="minicart-quantity">x {item.quantity}</div>
                        <div className="minicart-price">$ {item.price}.00</div>
                    </div>
                </div>   
            )
        }
    )
    return (
        <div className="minicart-container">
            {elmItem}
            <hr className="line-break"/>
            <div className="minicart-total-price">Total Price: <strong>$ {props.totalPrice}.00</strong></div>
        </div>
    )
}

export default MiniCartTable;
