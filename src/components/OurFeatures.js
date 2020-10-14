import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "./Product";
import products from "../utils/products";

function OurFeatures() {
    return (
        <div className="our-feature-bg">
            <Container>
                <Row className="mt-10 pt-5 first-row">
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <h2 className="text-modified">Our Featured Cakes</h2>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Link to="/shop">
                            <Button varian="success" className="btn-go-to-shop">
                                {" "}
                                View all products
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <h5>Seldolor sit amet consect etur</h5>
                    </Col>
                </Row>
                <Row className="features-text-black">
                    <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                        <Product {...products[0]}></Product>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                        <Product {...products[15]}></Product>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                        <Product {...products[20]}></Product>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                        <Product {...products[10]}></Product>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OurFeatures;
