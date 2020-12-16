import React from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as UserIcon } from './ic_user.svg';
import './ProfileAction.scss';

const ProfileAction = ({ className = "", activeClassName = "" }) => {
    return (
        <div className={`ProfileAction ${className}`}>
            <NavLink
                to="/login"
                className="ProfileAction-NavLink"
                activeClassName={activeClassName}
            >
                <UserIcon className="ProfileAction-Icon"/>
            </NavLink>
        </div>
    )
}

export default ProfileAction;
