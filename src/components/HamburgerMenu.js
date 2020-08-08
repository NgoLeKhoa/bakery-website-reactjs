import React, { useState } from 'react';

function HamburgerMenu(props) {
    const [isToggled, setIsToggled] = useState(false);
    const onClick=(e) => {
        e.target.classList.toggle("change")
        setIsToggled(!isToggled);
		props.onUpdateNav(isToggled)
    };
	return (
        <div className="hamburger-menu" onClick={onClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}

export default HamburgerMenu;