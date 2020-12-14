import React from 'react';
import IconButton from "../IconButton/IconButton";
import { ReactComponent as UserIcon } from './ic_user.svg';
import './ProfileAction.scss';

const ProfileAction = ({ className = "" }) => {
    return (
        <div className={`ProfileAction ${className}`}>
            <IconButton icon={UserIcon} className="ProfileAction-Icon"/>
        </div>
    )
}

export default ProfileAction;
