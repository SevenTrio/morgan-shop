import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.scss'

const Navigation = ({ routes }) => {
    routes = [
        {
            id: "f95e6ae1-a4bd-44d5-917d-7015f6cdd592",
            title: "Table lamps",
            alias: "table-lamps",
            image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
            menuOrder: "3"
        },
        {
            id: "66ef32ef-03ad-48c2-b295-bdfc018b5881",
            title: "Floor lamps",
            alias: "floor-lamps",
            image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
            menuOrder: "1"
        },
        {
            id: "f6e7591c-6743-432d-992b-c3bff746848d",
            title: "Exterior ceiling",
            alias: "exterior-ceiling",
            image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
            menuOrder: "2"
        },
        {
            id: "dc4437c1-364b-4ba5-992a-15f55ca2d8eb",
            title: "Interior ceiling",
            alias: "interior-ceiling",
            image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
            menuOrder: "0"
        }
    ]

    return (
        <nav className="Navigation">
            <ul className="Navigation-List">
                {routes.map(route =>
                    <li className="Navigation-Item">
                        <NavLink to={"/" + route.alias} className="Navigation-Link">{route.title}</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navigation;