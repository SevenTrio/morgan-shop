import React from 'react';
import { ReactComponent as SearchIcon } from './ic_search.svg';
import './SearchAction.scss';

const SearchAction = ({ className = "" }) => {
    return (
        <div className={`SearchAction ${className}`}>
            <div className="SearchAction-Button">
                <SearchIcon className="SearchAction-Icon"/>
            </div>
        </div>
    )
}

export default SearchAction;
