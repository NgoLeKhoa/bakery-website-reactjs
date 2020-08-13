import React from "react";
import {Carousel} from "react-bootstrap";
import sliderImages from "../utils/sliderImages";

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
                    <div className="wrap-arrow-prev"></div>
                    <div className="wrap-arrow-next"></div>
                    <Carousel.Caption className="caption-postion">
                        <h3 className="first-caption">{sliderImage.firstCaption}</h3>
                        <h3 className="second-caption">{sliderImage.secondCaption}</h3>
                        <p className="description">{sliderImage.description}</p>
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