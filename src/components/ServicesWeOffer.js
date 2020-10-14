import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ServicesWeOffer() {
    return (
        <Container className="services-we-offer">
            <h2 className="text-center">Services We offer</h2>
            {/* <div className="line-under"></div> */}
            <Row>
                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className="d-flex rectangle">
                        <div>
                            <h4>Cookies Cakes</h4>
                            <br />
                            <p className="text-color-grey">
                                Lorem Ipsum is simply my text of the printing
                                and Ipsum is simply text of the Ipsum is simply.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className="rectangle">
                        <h4>Tasty Cupcakes</h4>
                        <br />
                        <p className="text-color-grey">
                            Lorem Ipsum is simply my text of the printing and
                            Ipsum is simply text of the Ipsum is simply.
                        </p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className="rectangle">
                        <h4>Wedding Cakes</h4>
                        <br />
                        <p className="text-color-grey">
                            Lorem Ipsum is simply my text of the printing and
                            Ipsum is simply text of the Ipsum is simply.
                        </p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className="rectangle">
                        <h4>Awesome Recipes</h4>
                        <br />
                        <p className="text-color-grey">
                            Lorem Ipsum is simply my text of the printing and
                            Ipsum is simply text of the Ipsum is simply.
                        </p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className="rectangle">
                        <h4>Menu Planner</h4>
                        <br />
                        <p className="text-color-grey">
                            Lorem Ipsum is simply my text of the printing and
                            Ipsum is simply text of the Ipsum is simply.
                        </p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className="rectangle">
                        <h4>Home Delivery</h4>
                        <br />
                        <p className="text-color-grey">
                            Lorem Ipsum is simply my text of the printing and
                            Ipsum is simply text of the Ipsum is simply.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ServicesWeOffer;
