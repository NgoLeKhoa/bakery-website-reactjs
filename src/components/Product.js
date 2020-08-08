import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product(props) {

    const anItem = {
        id: props.id,
        name: props.name,
        img: props.img,
        unitPrice: props.price,
        quantity: 1,
        price: props.price,
    }

    const onClick = () => {
        props.onAddToCart(anItem)
    }

    return (
        <Card className="text-center product">
            <Link to={"/product-detail/" + anItem.id}>
                <Card.Img className="img-zoom-in" variant="top" src={anItem.img} alt="imgProduct" />
            </Link>
            <Card.Body >
                <Card.Title>{anItem.name}</Card.Title>
                <Card.Text>${anItem.price}.00</Card.Text>
                <Button className="text-white" variant="info" onClick={onClick}>Add To Cart</Button>
            </Card.Body>
        </Card>
    )

}

export default Product;
