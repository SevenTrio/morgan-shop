import React from 'react';
import './SwitchAddRemoveButton.scss';

const SwitchAddRemoveButton = ({ isRemove, className = "", ...props }) => {
    return (
        <button className={`SwitchAddRemoveButton ${isRemove && "SwitchAddRemoveButton_type_remove"} ${className}`} {...props}>
            <span className="SwitchAddRemoveButton-Text">
                { isRemove ? "-" : "+" }
            </span>
        </button>
    )
}

export default SwitchAddRemoveButton;