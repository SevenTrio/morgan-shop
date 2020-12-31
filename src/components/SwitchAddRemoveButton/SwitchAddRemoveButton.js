import React from 'react';
import './SwitchAddRemoveButton.scss';

const SwitchAddRemoveButton = ({ isRemove, className, ...props }) => {
    let classes = "SwitchAddRemoveButton";
    if (className) classes += " " + className;
    if (isRemove) classes += " SwitchAddRemoveButton_type_remove";

    return (
        <div className={classes} {...props}>
            <button className="SwitchAddRemoveButton-Button">
                <span className="SwitchAddRemoveButton-Text">
                    { isRemove ? "-" : "+" }
                </span>
            </button>
        </div>
    )
}

export default SwitchAddRemoveButton;