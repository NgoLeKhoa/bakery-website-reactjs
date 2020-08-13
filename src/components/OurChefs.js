import React from 'react'

const chef1 = require("../images/chef/chef-1.jpg")
const chef2 = require("../images/chef/chef-2.jpg")
const chef3 = require("../images/chef/chef-3.jpg")

function OurChefs() {
    return (
        <div className="d-flex-home">
            <div className="left-details">
                <h2>Our Chefs</h2>
                <p>Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion.</p>
            </div>
            <div className="right-details">
                <div>
                    <img className="chef-img" src={chef1} alt="chef1"/>
                    <h5>Maria Jane</h5>
                    <p>Expert in Cake Making</p>
                </div>
                <div>
                    <img className="chef-img" src={chef2} alt="chef2"/>
                    <h5>Michale Joe</h5>
                    <p>Expert in Cake Making</p>
                </div>
                <div>
                    <img className="chef-img" src={chef3} alt="chef3"/>
                    <h5>Chole Smith</h5>
                    <p>Expert in Cake Making</p>
                </div>
            </div>
        </div>
    )
}

export default OurChefs
