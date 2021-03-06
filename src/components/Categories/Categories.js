import React from 'react';
import { API_HOST } from "../../config";
import { useSelector } from "react-redux";
import { selectCategoriesList } from "../../redux/selectors/categoriesSelectors";
import { Link } from "react-router-dom";
import ProductImage from "../ProductImage/ProductImage";
import './Categories.scss';

const Categories = ({ className = "" }) => {
    const categories = useSelector(selectCategoriesList);

    return (
        <div className={`Categories ${className}`}>
            <div className="Categories-Gallery">
                {categories && categories.map(category =>
                    <div key={category.id} className="Categories-GalleryItem">
                        <Link to={"/" + category.alias} className="Categories-GalleryLink">
                            <ProductImage
                                src={API_HOST + category.image}
                                alt={category.title}
                                className="Categories-GalleryImage"
                            />
                            <h3 className="Categories-Text">{category.title}</h3>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Categories;
