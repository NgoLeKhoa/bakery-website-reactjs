import React, { useState } from 'react'
import { Button } from "react-bootstrap";

function QuantityChangeButton(props) {

    const [quantity, setQuantity] = useState(props.quantity)

    const onChange = (e) => {
        const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 0;
        setQuantity(value)
        props.onChangeQuantity(value)
    }

    const onClick = (e, number) => {
        const value = quantity + number > 0 ? (quantity + number) : 0
        setQuantity(value)
        props.onChangeQuantity(value)
    }
    
    return (
        <div className="group-change-quantity">
            <Button
                className="btn-decrease-quantity"
                variant="warning"
                onClick={(e) => onClick(e, -1)}
            >
                -
            </Button>
            <input
                className="change-quantity"
                type="tel"
                name="quantity"
                value={quantity}
                onChange={(e) => onChange(e)}
            />
            <Button
                className="btn-increase-quantity"
                variant="warning"
                onClick={(e) => onClick(e, 1)}
            >
                +
            </Button>
        </div>
    )
}

export default QuantityChangeButton
