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
    const [showArrowDown, setShowArrowDown] = useState(false);
    const [showArrowUp, setShowArrowUp] = useState(false);
    const [showScroll, setShowScroll] = useStateWithCallback(false);

    useEffect(() => {
        const isShowArrowDown = scrollY < document.documentElement.clientHeight / 2;
        const isShowArrowUp = scrollY > document.documentElement.clientHeight * 1.2;

        setShowArrowDown(isShowArrowDown);
        setShowArrowUp(isShowArrowUp);
        setShowScroll(isShowArrowDown || isShowArrowUp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        showArrowDown ? handleScrollToProducts() : handleScrollToTop();
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
                            className={`ScrollToButton-Link ${showArrowUp ? "ScrollToButton-Link_up" : ""}`}
                            onClick={handleScroll}
                        >
                            <span className="ScrollToButton-Text">Scroll</span>
                            {showArrowUp
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