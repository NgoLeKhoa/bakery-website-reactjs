import React from "react";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";


function ProductList(props) {

    const elmProduct = props.products.map((product) => {
        return (
            <Col md={4} key={product.id}>
                <Product {...product} onAddToCart={props.onAddToCart}/>
            </Col>
        )
    })

    return (
        <Row className="mt-5">
            {elmProduct}
        </Row>
    )

}
export default ProductList;