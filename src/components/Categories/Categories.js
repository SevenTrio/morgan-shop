import React from 'react';
import { API_HOST } from "../../config";
import { useSelector } from "react-redux";
import { selectCategoriesList } from "../../redux/selectors/categoriesSelectors";
import { Link } from "react-router-dom";
import './Categories.scss';

const Categories = () => {
    const categories = useSelector(selectCategoriesList)

    return (
        <div className="Categories">
            <div className="Categories-Gallery">
                {categories && categories.map(category =>
                    <div key={category.id} className="Categories-GalleryItem">
                        <Link to={"/" + category.alias} className="Categories-GalleryLink">
                            <img src={API_HOST + category.image} alt={category.title} className="Categories-GalleryImage"/>
                            <h3 className="Categories-Text">{category.title}</h3>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Categories;
