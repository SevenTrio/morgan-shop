import React from 'react';
import './Container.scss';

const Container = ({ children, className = "", ...props }) => {
    return (
        <div
            className={`Container ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

export default Container;
