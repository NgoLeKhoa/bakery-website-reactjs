import React from 'react';
import {Dropdown, Button } from "react-bootstrap";

const displayedNumbers = [6, 7, 8, 9, 10]

function DisplayNumberOfProducts(props) {
    const elmDisplayedNumbers = displayedNumbers.map( 
        
        (displayedNumber, idx) =>  {

            const onClick = () => {
                props.onChangeDisplayedNumberOfProducts(displayedNumber)
            }

            return (
                <Dropdown.Item 
                    key={idx} 
                    style={{fontWeight:"bold"}} 
                    onClick={onClick}
                >
                    {displayedNumber}
                </Dropdown.Item>)
        }
    )
    return (
        <Dropdown >
            <Button className="font-weight-bold" variant="success"> Display {props.productsPerPage} Products:</Button>
            <Dropdown.Toggle split variant="success" />
            <Dropdown.Menu >
                {elmDisplayedNumbers}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DisplayNumberOfProducts
