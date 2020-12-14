import React from 'react';
import IconButton from "../IconButton/IconButton";
import { ReactComponent as SearchIcon } from './ic_search.svg';
import './SearchAction.scss';

const SearchAction = ({ className = "" }) => {
    return (
        <div className={`SearchAction ${className}`}>
            <IconButton icon={SearchIcon} className="SearchAction-Icon"/>
        </div>
    )
}

export default SearchAction;
