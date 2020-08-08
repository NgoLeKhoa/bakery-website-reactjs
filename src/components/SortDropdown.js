import React from 'react';
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faSortAlphaDown, 
    faSortAlphaUp, 
    faSortNumericDown, 
    faSortNumericUp 
} from '@fortawesome/free-solid-svg-icons'

function SortDropdown(props) {

    const onClick = (typeOfAction, sortType, sortValue) => {
        props.onSort(typeOfAction, sortType, sortValue)
    }

    return (
        <Dropdown >
            <Dropdown.Toggle variant="success" className="font-weight-bold">
                Sort By:
            </Dropdown.Toggle>

            <Dropdown.Menu >
                <Dropdown.Item eventKey="1" onClick={() => onClick("sort","name", 1)} >
                    Name: Ascending
                    <span className="ml-2" ><FontAwesomeIcon icon={faSortAlphaDown} /></span>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={() => onClick("sort", "name", -1)} >
                    Name: Descending
                    <span className="ml-2" ><FontAwesomeIcon icon={faSortAlphaUp} /></span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="3" onClick={() => onClick("sort", "price", 1)} >
                    Price: Ascending
                    <span className="ml-2" ><FontAwesomeIcon icon={faSortNumericDown} /></span>
                </Dropdown.Item>
                <Dropdown.Item eventKey="4" onClick={() => onClick("sort", "price", -1)} >
                    Price: Descending
                    <span className="ml-2" ><FontAwesomeIcon icon={faSortNumericUp} /></span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SortDropdown

