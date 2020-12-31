import React from "react";
import { useHistory } from "react-router-dom";
import Container from "../Container/Container";
import PageHeading from "../PageHeading/PageHeading";
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
            <Container className="BasketEmpty-Container">
                <PageHeading className="BasketEmpty-Heading">Basket</PageHeading>
                <img src={lampImage} alt="" className="BasketEmpty-Image"/>
                <p className="BasketEmpty-Text">Your basket is empty</p>
                <Button
                    onClick={handleGoToHome}
                    className="BasketEmpty-Button"
                    variant="secondary"
                >
                    Start shopping
                </Button>
            </Container>
        </div>
    )
}

export default BasketEmpty;