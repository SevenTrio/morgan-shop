import React from 'react';
import { Link } from "react-router-dom";
import './Categories.scss';

const Categories = () => {
    const categories = [
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
    ];

    return (
        <div className="Categories">
            <div className="Categories-Gallery">
                {categories.map(category =>
                    <div key={category.id} className="Categories-GalleryItem">
                        <Link to={"/" + category.alias} className="Categories-GalleryLink">
                            <img src={`/temp-images/${category.alias}.png`} alt={category.title} className="Categories-GalleryImage"/>
                            <h3 className="Categories-Text">{category.title}</h3>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Categories;
