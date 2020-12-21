import React from 'react';
import './PageHeading.scss';

const PageHeading = ({ children, className = "", ...props }) => {
    return (
        <h1
            className={`PageHeading ${className}`}
            {...props}
        >
            {children}
        </h1>
    )
}

export default PageHeading;
