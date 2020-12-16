import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { showMenu, hideMenu } from "../../redux/actions/menuActions";
import { ReactComponent as MenuIcon } from './ic_menu.svg';
import IconButton from "../IconButton/IconButton";
import './Hamburger.scss'

const Hamburger = () => {
    const dispatch = useDispatch();
    const menu = useSelector(state => state.menu)

    const handleMenuButtonClick = () => {
        menu.open ? dispatch(hideMenu) : dispatch(showMenu);
    };

    return (
        <div className="Hamburger">
            <IconButton
                icon={MenuIcon}
                className="Hamburger-Button"
                onClick={handleMenuButtonClick}
            />
        </div>
    )
}

export default Hamburger;