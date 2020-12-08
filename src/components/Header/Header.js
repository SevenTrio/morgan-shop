import React from "react";
import './Header.scss'

import Navigation from "../Navigation/Navigation";

const Header = () => {
    return (
        <div className="Header">
            <div className="Header-Wrapper">
                <Navigation className="Header-Navigation"/>
            </div>
        </div>
    );
};

export default Header;