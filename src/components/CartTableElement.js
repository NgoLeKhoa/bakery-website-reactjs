import React from 'react'
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuantityChangeButton from "./QuantityChangeButton";
import CancelItem from "./CancelItem";

function CartTableElement(props) {
    
    const item = props.item
    const onChangeQuantity = (value) => {
        let anItemID = item.id
        props.onChangeQuantityAndPrice(anItemID, value)
    }

    const onRemoveItem = (itemID) => {
        props.onRemoveItem(itemID)
    }

    return (
        <tr style={{ alignItems: "center" }} key={item.id}>
            <td className="align-middle" style={{ width: "120px", height: "100px" }}>
                <Link to={"/product-detail/" + item.id}>
                    <Image
                        style={{ marginLeft:"20px", width: "60px", height: "60px" }}
                        alt={item.name}
                        src={item.img}
                    />
                </Link>
            </td>
            <td className="align-middle">{item.name}</td>
            <td className="text-center align-middle">$&nbsp;{item.unitPrice}.00</td>
            <td >
                <QuantityChangeButton quantity={item.quantity} onChangeQuantity={onChangeQuantity} />
            </td>
            <td className="text-center align-middle">$&nbsp;{item.price}.00</td>
            <td className="text-center align-middle">
                <CancelItem id={item.id} onRemoveItem={onRemoveItem} />
            </td>
        </tr>
    )
}

export default CartTableElement;
