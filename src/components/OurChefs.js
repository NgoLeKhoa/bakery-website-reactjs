import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const chef1 = require("../images/chef/chef-1.jpg");
const chef2 = require("../images/chef/chef-2.jpg");
const chef3 = require("../images/chef/chef-3.jpg");

function OurChefs() {
    return (
        <Container>
            <Row
                style={{
                    justifyContent: "space-between",
                    marginTop: 50,
                    marginBottom: 50,
                }}
            >
                <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                    <h2 className="text-our-chef">Our Chefs</h2>
                    <p>
                        Lorem ipsum dolor sit amet, cons ectetur elit.
                        Vestibulum nec odios Suspe ndisse cursus mal suada faci
                        lisis. Lorem ipsum dolor sit ametion.
                    </p>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                    <div className="chef-item">
                        <div className="chef-img">
                            <img
                                className="img-fluid"
                                src={chef1}
                                alt="chef1"
                            />
                        </div>
                        <h4>Maria Jane</h4>
                        <h5>Expert in Cake Making</h5>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                    <div className="chef-item">
                        <div className="chef-img">
                            <img
                                className="img-fluid"
                                src={chef2}
                                alt="chef2"
                            />
                        </div>
                        <h4>Michale Joe</h4>
                        <h5>Expert in Cake Making</h5>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                    <div className="chef-item">
                        <div className="chef-img">
                            <img
                                className="img-fluid"
                                src={chef3}
                                alt="chef3"
                            />
                        </div>
                        <h4>Chole Smith</h4>
                        <h5>Expert in Cake Making</h5>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default OurChefs;
