import React from "react";
import { Form, FormControl } from "react-bootstrap";

function SearchBar(props) {
    
    const onChange = (typeOfAction, e) => {
        props.onSearch(typeOfAction, e.target.value)
    }

    return (
        <Form >
            <FormControl type="text" placeholder="Enter Search Keywords" className="mr-sm-2" onChange={(e) => onChange("search", e)}/>
        </Form>
    )
}

export default SearchBar;
