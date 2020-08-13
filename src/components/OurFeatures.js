import React from 'react'
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Product from "./Product";
import products from "../utils/products";

function OurFeatures() {
    return (
        <div className="mt-10 pt-5 text-white">
            <h2 >Our Featured Cakes ___</h2>
            <h5>Seldolor sit amet consect etur</h5>
            <Link to="/shop">
                <Button varian="success" className="btn-go-to-shop"> View all products</Button>
            </Link> 
            <div className="wrapper justify-space-between features-text-black">
                <Product {...products[0]} ></Product>
                <Product {...products[15]} ></Product>
                <Product {...products[20]} ></Product>
                <Product {...products[10]} ></Product>
            </div>
        </div>
    )
};

export default OurFeatures;
