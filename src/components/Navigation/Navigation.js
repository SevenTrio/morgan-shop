import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux" ;
import { selectCategoriesSortedByMenuOrder } from "../../redux/selectors/categoriesSelectors";
import './Navigation.scss';

const Navigation = ({ className = "" }) => {
    const categories = useSelector(selectCategoriesSortedByMenuOrder());

    return (
        <nav className={`Navigation ${className}`}>
            <ul className="Navigation-List">
                {categories && categories.map(category =>
                    <li key={category.id} className="Navigation-ListItem">
                        <NavLink
                            to={"/" + category.alias}
                            className="Navigation-Link"
                            activeClassName="Navigation-Link_active"
                        >
                            {category.title}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navigation;