import React from "react";
import { useHistory } from "react-router-dom";
import { formatDate } from "../../utils";
import Container from "../Container/Container";
import PageHeading from "../PageHeading/PageHeading";
import Button from "../Button/Button";
import glowingLampImage from "../../pages/BasketPage/glowing_lamp.svg";
import "./OrderSuccessful.scss";

const OrderSuccessful = () => {
    let history = useHistory();
    const orderNumber = Math.floor(Math.random() * 10000000000);
    const orderDate = formatDate(new Date(), "/");

    const handleGoToHome = () => {
        history.push("/")
    }
    
    return(
        <div className="OrderSuccessful">
            <Container className="OrderSuccessful-Container">
                <PageHeading className="OrderSuccessful-Heading">Thank you!</PageHeading>
                <img src={glowingLampImage} alt="" className="OrderSuccessful-Image"/>
                <p className="OrderSuccessful-Title">Your ordering is completely successful!</p>
                <p className="OrderSuccessful-Text">We'll let you know when it ships and it headed your way.</p>
                <div className="OrderSuccessful-OrderInfo">
                    <p className="OrderSuccessful-Order">
                        Order:
                        <span className="OrderSuccessful-OrderValue">{orderNumber}</span>
                    </p>
                    <p className="OrderSuccessful-DateOrder">
                        Date order:
                        <span className="OrderSuccessful-DateOrderValue">{orderDate}</span>
                    </p>
                </div>
                <Button
                    onClick={handleGoToHome}
                    className="OrderSuccessful-Button"
                >
                    Continue shopping
                </Button>
            </Container>
        </div>
    )
}

export default OrderSuccessful;