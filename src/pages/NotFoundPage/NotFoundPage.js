import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import charImage from "./0_char.svg"
import "./NotFoundPage.scss"

const NotFoundPage = () => {
    let history = useHistory();

    const handleGoToHome= () => {
        history.push("/");
    }

    return(
        <div className="NotFoundPage">
            <p className="NotFoundPage-ErrorCode">
                4
                <img src={charImage} alt="" className="NotFoundPage-Image"/>
                4
            </p>
            <p className="NotFoundPage-Text">Sorry, we can't find this page</p>
            <Button
                className="NotFoundPage-Button"
                onClick={handleGoToHome}
            >
                HOME PAGE
            </Button>
        </div>
    )
}

export default NotFoundPage;