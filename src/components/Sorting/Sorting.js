import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setProductsSortType } from "../../redux/actions/productsActions";
import { ReactComponent as ArrowDownIcon } from './ic_arrow_down.svg';
import { ReactComponent as CheckIcon } from './ic_check.svg';
import './Sorting.scss';

const sortTypes = [
    {
        alias: "price-height-to-low",
        title: "Price height to low",
    },
    {
        alias: "price-low-to-height",
        title: "Price low to height",
    },
    {
        alias: "newness",
        title: "Newness",
    },
]

const Sorting = ({ className }) => {
    const dispatch = useDispatch();
    const currentSortType = useSelector((state) => state.products.sortType);
    const [open, setOpen] = useState(false);
    
    const handleButtonClick = () => {
        setOpen((prevState) => !prevState)
    }

    const handleSortTypeChange = (sortType) => {
        dispatch(setProductsSortType(sortType));
        setOpen(false);
    }
    
    return (
        <div className={`Sorting ${className}`}>
            <span className="Sorting-Text">
                Sort by:
            </span>

            <button className="Sorting-Button" onClick={handleButtonClick}>
                <span className="Sorting-ButtonText">
                    {currentSortType.title}
                    <ArrowDownIcon className="Sorting-ButtonIcon"/>
                </span>
            </button>

            {open &&
                <div className="Sorting-Dropdown">
                    <ul className="Sorting-List">
                        {sortTypes.map(sortType =>
                            <li
                                key={sortType.alias}
                                className="Sorting-Item"
                                onClick={() => handleSortTypeChange(sortType)}
                            >
                                {sortType.title}
                                {currentSortType.alias === sortType.alias &&
                                    <CheckIcon className="Sorting-CheckedIcon"/>
                                }
                            </li>
                        )}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Sorting;
