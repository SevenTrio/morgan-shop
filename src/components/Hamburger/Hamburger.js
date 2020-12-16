import React from 'react';
import IconButton from "../IconButton/IconButton";
import { ReactComponent as MenuIcon } from './ic_menu.svg';

const Hamburger = () => {
    return(
        <div className="Hamburger">
            <IconButton
                icon={MenuIcon}
                className="Hamburger-Button"
                onClick={() => console.log("Hamburger button click")}
            />
        </div>
    )
}

export default Hamburger;