import React, { Fragment } from "react";
import Products from "../../components/Products/Products";

const CategoryPage = ({ category }) => {
    return(
        <Fragment>
            <Products category={category}/>
        </Fragment>
    )
}

export default CategoryPage;