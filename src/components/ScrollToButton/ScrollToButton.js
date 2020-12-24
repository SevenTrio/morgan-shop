import React, { useEffect, useState } from "react";
import { useStateWithCallback } from "../../customHooks/useStateWithCallback";
import { animateScroll as scroll, scroller } from 'react-scroll'
import { useScroll } from "../../customHooks/useScroll";
import { Transition } from "react-transition-group";
import { Portal } from 'react-portal';
import arrowDownImage from "./ic_long_arrow_down.svg";
import arrowUpImage from "./ic_long_arrow_up.svg";
import "./ScrollToButton.scss";

const ScrollToButton = () => {
    const { scrollY } = useScroll();
    const [showScrollDown, setShowScrollDown] = useState(true);
    const [showScrollUp, setShowScrollUp] = useState(true);
    const [showScroll, setShowScroll] = useStateWithCallback(true);

    useEffect(() => {
        setShowScrollDown(scrollY < document.documentElement.clientHeight / 2);
        setShowScrollUp(scrollY > document.documentElement.clientHeight * 1.2);
        setShowScroll(scrollY < document.documentElement.clientHeight / 2 || scrollY > document.documentElement.clientHeight * 1.2);
    }, [scrollY]);

    const duration = 300;

    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
    };

    const transitionStyles = {
        entering: { opacity: 0, },
        entered:  { opacity: 1, },
        exiting:  { opacity: 0, },
        exited:   { opacity: 1, }
    };

    const handleScrollToProducts = () => {
        setShowScroll(
            false,
            () => {
                scroller.scrollTo('products', {
                    duration: 500,
                    smooth: true,
                    offset: -16,
                })
            }
        );
    };

    const handleScrollToTop = () => {
        setShowScroll(
            false,
            () => {
                scroll.scrollToTop({
                    duration: 1000,
                    smooth: true,
                });
            }
        );
    };

    const handleScroll = () => {
        showScrollDown ? handleScrollToProducts() : handleScrollToTop();
    };

    return(
        <Portal>
            <Transition
                in={showScroll}
                timeout={duration}
                mountOnEnter={true}
                unmountOnExit={true}
            >
                {state => (
                    <div
                        className="ScrollToButton"
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    >
                        <div
                            className={`ScrollToButton-Link ${showScrollUp ? "ScrollToButton-Link_up" : ""}`}
                            onClick={handleScroll}
                        >
                            <span className="ScrollToButton-Text">Scroll</span>
                            {showScrollUp
                                ? <img src={arrowUpImage} alt="" className="ScrollToButton-Image"/>
                                : <img src={arrowDownImage} alt="" className="ScrollToButton-Image"/>
                            }
                        </div>
                    </div>
                )}
            </Transition>
        </Portal>
    )
}

export default ScrollToButton;