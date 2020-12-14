import React from 'react';
import './IconButton.scss';

const IconButton = ({ icon: Icon, className = "", ...props }) => {
    return (
        <button className={`IconButton ${className}`} {...props}>
            <Icon className="IconButton-Icon"/>
        </button>
    )
}

export default IconButton;
