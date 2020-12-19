import React from "react";
import "./Divider.scss"

const Divider = ({ className = "", text = "" }) => {
    return (
        <div
            className={`Divider ${text && text.length ? "Divider_withText" : ""} ${className}`}
            data-divider-text={text}
        />
    )
}

export default Divider;