import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import lampImage from "../../pages/BasketPage/lamp.svg";
import "./BasketEmpty.scss";

const BasketEmpty = () => {
    let history = useHistory();

    const handleGoToHome = () => {
        history.push("/")
    }
    
    return(
        <div className="BasketEmpty">
            <h1 className="BasketEmpty-Heading">Basket</h1>
            <img src={lampImage} alt="" className="BasketEmpty-Image"/>
            <p className="BasketEmpty-Text">Your basket is empty</p>
            <Button
                onClick={handleGoToHome}
                className="BasketEmpty-Button"
                variant="secondary"
            >
                Start shopping
            </Button>
        </div>
    )
}

export default BasketEmpty;