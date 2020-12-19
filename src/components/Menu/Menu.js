import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { hideMenu } from "../../redux/actions/menuActions";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { ReactComponent as CloseIcon } from './ic_close.svg';
import { ReactComponent as SearchIcon } from './ic_search.svg';
import { Portal } from 'react-portal';
import IconButton from "../IconButton/IconButton";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import './Menu.scss'

const Menu = ( ) => {
    const dispatch = useDispatch();
    const open = useSelector(state => state.menu.open)
    const targetRef = React.createRef();
    let targetElement = null;

    useEffect(() => {
        targetElement = targetRef.current;
        if (open) {
            disableBodyScroll(targetElement)
        }
    }, [open]);

    const handleClose = () => {
        if (open) {
            enableBodyScroll(targetElement)
            dispatch(hideMenu);
        }
    }

    return (
        open &&
            <Portal>
                <div
                    ref={targetRef}
                    className="Menu"
                >
                    <div className="Menu-Header">
                        <div className="Menu-Container">
                            <IconButton
                                icon={CloseIcon}
                                className="Menu-IconButton Menu-CloseButton"
                                onClick={handleClose}
                            />

                            <Logo
                                className="Menu-Logo"
                                onClick={handleClose}
                            />

                            <IconButton
                                icon={SearchIcon}
                                className="Menu-IconButton Menu-SearchButton"
                            />
                        </div>
                    </div>
                    <div className="Menu-Content">
                        <div className="Menu-Container">
                            <div className="Menu-Products">
                                <p className="Menu-ProductsTitle">PRODUCTS</p>
                                <Navigation className="Menu-Navigation" onNavLinkClick={handleClose}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Portal>
    )
}

export default Menu;