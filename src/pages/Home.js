import React from "react";
import Slider from "../components/Slider";
import ServicesWeOffers from "../components/ServicesWeOffer";
import OurFeatures from "../components/OurFeatures";
import OurChefs from "../components/OurChefs";

function Home() {
    return (
        <div>
            <Slider />
            <ServicesWeOffers />
            <OurFeatures />
            <div className="bg-like-grey pt-5">
                <OurChefs />
            </div>
        </div>
    );
}

export default Home;
