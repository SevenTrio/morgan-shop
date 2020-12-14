import React from "react";
import './Header.scss'

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import SearchAction from "../SearchAction/SearchAction";
import ProfileAction from "../ProfileAction/ProfileAction";
import BasketAction from "../BasketAction/BasketAction";

const Header = () => {
    return (
        <header className="Header">
            <div className="Header-Container">
                <Logo className="Header-Logo"/>
                <Navigation className="Header-Navigation"/>
                <div className="Header-ActionsContainer">
                    <SearchAction className="Header-Action Header-SearchAction"/>
                    <ProfileAction className="Header-Action Header-ProfileAction"/>
                    <BasketAction className="Header-Action Header-BasketAction"/>
                </div>
            </div>
        </header>
    );
};

export default Header;