import React from "react";
import { Carousel } from "react-bootstrap";

const sliderImages = [
    { id: 1, img: require("../images/home-slider/slider-1.jpg") },
    { id: 2, img: require("../images/home-slider/slider-2.jpg") },
    { id: 3, img: require("../images/home-slider/slider-3.jpg") },
    { id: 4, img: require("../images/home-slider/slider-4.jpg") },
    { id: 5, img: require("../images/home-slider/slider-5.jpg") },
    { id: 6, img: require("../images/home-slider/slider-6.jpg") },
    { id: 7, img: require("../images/home-slider/slider-7.jpg") },
    { id: 8, img: require("../images/home-slider/slider-8.jpg") },
    { id: 9, img: require("../images/home-slider/slider-9.jpg") },
    { id: 10, img: require("../images/home-slider/slider-10.jpg") },
    { id: 11, img: require("../images/home-slider/slider-11.jpg") },
    { id: 12, img: require("../images/home-slider/slider-12.jpg") },
    { id: 13, img: require("../images/home-slider/slider-13.jpg") },
    { id: 14, img: require("../images/home-slider/slider-14.jpg") },
]

function Slider() {
    const elmCarousel = sliderImages.map(
        sliderImage => {
            return (
                <Carousel.Item key={sliderImage.id}>
                    <img
                        className="d-block w-100"
                        src={sliderImage.img}
                        alt={sliderImage.id}
                    />
                    <Carousel.Caption>
                        <h3>Slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
    return (
        <Carousel>
            {elmCarousel}
        </Carousel>
    )
}

    export default Slider;