import React from "react";
import Products from "../../components/Products/Products";
import "./CategoryPage.scss";

const CategoryPage = ({ category }) => {
    return(
        <div className="CategoryPage">
            <Products category={category} className="CategoryPage-Products"/>
        </div>
    )
}

export default CategoryPage;