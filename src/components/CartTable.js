import React from "react";
import { Table, Form } from "react-bootstrap";
import CartTableElement from "./CartTableElement";
import CancelItem from "./CancelItem";

function CartTable(props) {

    const elmItem = props.items.map((item) =>  {
        return(
            <CartTableElement 
                key={item.id}
                item={item} 
                onChangeQuantityAndPrice={props.onChangeQuantityAndPrice} 
                onRemoveItem={props.onRemoveItem}
            />
        )    
    })
    const onRemoveAllItems = () => {
        props.onRemoveAllItems()
    }

    return (
        <Form>
            <Table responsive striped bordered>
                <thead>
                    <tr>
                        <th className="text-center">Thumbnail</th>
                        <th className="text-center">Product</th>
                        <th className="text-center">Unit Price</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Total</th>
                        <th className="text-center">Remove Item</th>
                    </tr>
                </thead>
                <tbody>
                    {elmItem}
                    <tr>
                        <td className="font-weight-bold text-right align-middle" colSpan="3">Total</td>
                        <td className="font-weight-bold text-center align-middle">{props.totalQuantity}</td>
                        <td className="font-weight-bold text-center align-middle">$&nbsp;{props.totalPrice}.00</td>
                        <td >
                            <CancelItem id="" onRemoveAllItems={onRemoveAllItems} />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Form>

    )
}


export default CartTable;