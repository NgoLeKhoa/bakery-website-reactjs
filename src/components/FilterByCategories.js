import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import categories from "../utils/categories";

function FilterByCategories(props) {
    const elmCategory = categories.map((category) => {
        const onClick = (typeOfAction) => {
            props.onChangeCategoryID(typeOfAction, category.id)
        }

        return (
            <Link key={category.id} to={"/shop/product-category/" + category.name}>
                <ListGroup.Item
                    className="bg-light text-dark"
                    role="button"
                    onClick={() => onClick("filter")}
                >
                    {category.name}
                </ListGroup.Item>
            </Link>
        )
    });
    return (
        <ListGroup variant="flush" className="bg-light mt-3">
            <ListGroup.Item className="bg-light font-weight-bold">Product Categories</ListGroup.Item>
            {elmCategory}
        </ListGroup>
    )
}

export default FilterByCategories;