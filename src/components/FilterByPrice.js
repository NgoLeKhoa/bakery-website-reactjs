import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function FilterByPrice(props) {
    const [priceRange, setPriceRange] = useState({
        minPrice: "",
        maxPrice: "",
    })

    const onChange = (e) => {
        setPriceRange({ ...priceRange, [e.target.name]: (parseInt(e.target.value, 10) <= 0 || e.target.value === "" ? 0 : parseInt(e.target.value, 10)) })
    }

    const onSubmit = (typeOfAction, e) => {
        e.preventDefault();
        props.onChangePrice(typeOfAction, priceRange.minPrice, priceRange.maxPrice)
    }

    return (
        <Form className="mt-5 mb-5" onSubmit={(e) => onSubmit("filterByPrice", e)}>
            <div className="title">
                Price Range
            </div>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}> 
                 
                
                <Form.Group>
                    <Form.Control
                        className="price-input"
                        name="minPrice" 
                        type="number" 
                        value={priceRange.minPrice} 
                        onChange={onChange}/>
                </Form.Group>

                <Form.Group >
                    <Form.Text className="text-muted">-</Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        className="price-input"
                        name="maxPrice" 
                        type="number" 
                        value={priceRange.maxPrice} 
                        onChange={onChange}
                        />
                </Form.Group>
            </div>
            <Button className="price-btn" variant="success" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default FilterByPrice;
