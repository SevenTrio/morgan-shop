import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import charImage from "./0_char.svg"
import "./NotFound.scss"

const NotFound = () => {
    let history = useHistory();

    const handleGoToHome= () => {
        history.push("/");
    }

    return(
        <div className="NotFound">
            <p className="NotFound-ErrorCode">
                4
                <img src={charImage} alt="" className="NotFound-Image"/>
                4
            </p>
            <p className="NotFound-Text">Sorry, we can't find this page</p>
            <Button
                className="NotFound-Button"
                onClick={handleGoToHome}
            >
                HOME PAGE
            </Button>
        </div>
    )
}

export default NotFound;