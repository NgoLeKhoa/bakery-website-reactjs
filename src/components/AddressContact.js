import React from "react";
import { ListGroup } from "react-bootstrap";


class AddressContact extends React.Component {
    render() {
        return(
            <ListGroup >
                <ListGroup.Item style={{ marginLeft: "70px", borderColor: "transparent" }}>
                    <div >
                        <h3>Address:</h3>
                        <p>
                            54B, Tailstoi Town 5238<br/>
                            La city, IA 522364
                        </p>
                    </div>
                    <div >
                        <h3>Phone:</h3>
                        <p>(1800) 574 9687</p>
                    </div>
                    <div >
                        <h3>Email:</h3>
                        <p>cakebakery@contact.co.in</p>
                    </div>
                    <div >
                        <h3>Open Hours:</h3>
                        <p>8:00 AM – 10:00 PM</p>
                        <p>Monday – Sunday</p>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        )
    }
}

export default AddressContact