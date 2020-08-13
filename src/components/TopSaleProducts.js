import React from 'react'
import {Link} from "react-router-dom";
import products from "../utils/products";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function TopSaleProducts() {
    return (
        <>
            <h5>Top Sale Products &nbsp;__</h5>
            <div className="minicart-table">
                <Link to={"/product-detail/" + products[3].id}>
                    <div>
                        <img
                            className="top-sale-products-img"
                            src={products[3].img}
                            alt="sale-product-1"
                        />
                    </div>
                </Link>
                <div className="minicart-text-container">
                    <div className="top-sale-products-name">{products[3].name}</div>
                    <div className="minicart-quantity">
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                    </div>
                    <div className="minicart-price">$&nbsp;{products[3].price}.00</div>
                </div>
                <Link to={"/product-detail/" + products[8].id}>
                    <div>
                        <img
                            className="top-sale-products-img"
                            src={products[8].img}
                            alt="sale-product-2"
                        />
                    </div>
                </Link>
                <div className="minicart-text-container">
                    <div className="top-sale-products-name">{products[8].name}</div>
                    <div className="minicart-quantity">
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                    </div>
                    <div className="minicart-price">$&nbsp;{products[8].price}.00</div>
                </div>
                <Link to={"/product-detail/" + products[13].id}>
                    <div>
                        <img
                            className="top-sale-products-img"
                            src={products[13].img}
                            alt="sale-product-3"
                        />
                    </div>
                </Link> 
                <div className="minicart-text-container">
                    <div className="top-sale-products-name">{products[13].name}</div>
                    <div className="minicart-quantity">
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                    </div>
                    <div className="minicart-price">$&nbsp;{products[13].price}.00</div>
                </div>
                <Link to={"/product-detail/" + products[22].id}>
                    <div>
                        <img
                            className="top-sale-products-img"
                            src={products[22].img}
                            alt="sale-product-4"
                        />
                    </div>
                </Link>
                <div className="minicart-text-container">
                    <div className="top-sale-products-name">{products[22].name}</div>
                    <div className="minicart-quantity">
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                        <FontAwesomeIcon icon={faStar} className="icon-yellow"/>
                    </div>
                    <div className="minicart-price">$&nbsp;{products[22].price}.00</div>
                </div>
            </div>
        </>

    )
}

export default TopSaleProducts;
