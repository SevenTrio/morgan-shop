import React from 'react';
import './Button.scss';

const Button = ({ children, className = "", variant, ...props }) => {
    let classes = `Button ${className}`
    if (variant === "secondary") classes += " Button_secondary";

    return (
        <button
            className={classes} {...props}>
            <span className="Button-Text">
                {children}
            </span>
        </button>
    )
}

export default Button;
