import React from "react";
import './Header.scss'

import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import SearchAction from "../SearchAction/SearchAction";
import ProfileAction from "../ProfileAction/ProfileAction";
import BasketAction from "../BasketAction/BasketAction";
import Hidden from "../Hidden/Hidden";

const Header = () => {
    return (
        <header className="Header">
            <div className="Header-Container">
                <Hidden mdUp>
                    <Hamburger/>
                </Hidden>
                <Logo className="Header-Logo"/>
                <Hidden mdDown>
                    <Navigation className="Header-Navigation"/>
                </Hidden>
                <div className="Header-ActionsContainer">
                    <Hidden mdDown>
                        <SearchAction className="Header-Action Header-SearchAction"/>
                    </Hidden>
                    <ProfileAction
                        className="Header-Action Header-ProfileAction"
                        activeClassName="Header-Action_active"
                    />
                    <BasketAction
                        className="Header-Action Header-BasketAction"
                        activeClassName="Header-Action_active"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;