import React from "react";
import {Container} from "react-bootstrap";
import Slider from "../components/Slider";
import ServicesWeOffers from "../components/ServicesWeOffer";
import OurFeatures from "../components/OurFeatures";
import OurChefs from "../components/OurChefs";

function Home() {
    return (
        <div className="mt-5">
            <Slider />
            <Container>
                <ServicesWeOffers />
            </Container>
            <div className="bg-like-pink pb-10">
                <Container >
                    <OurFeatures />
                </Container>
            </div>
            <div className="bg-like-grey pt-5">
                <Container >
                    <OurChefs />
                </Container>
            </div>
        </div>
    )
}

export default Home;