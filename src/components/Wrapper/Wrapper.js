import React from 'react';
import './Wrapper.scss';

const Wrapper = ({ children, className = "", ...props }) => {
    return (
        <div
            className={`Wrapper ${className}`} {...props}
        >
            {children}
        </div>
    )
}

export default Wrapper;
