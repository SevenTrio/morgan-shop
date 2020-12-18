import React, { Fragment } from "react";
import Categories from "../../components/Categories/Categories";
import Hidden from "../../components/Hidden/Hidden";
import Products from "../../components/Products/Products";

const HomePage = () => {
    return(
        <Fragment>
            <Categories/>
            <Hidden mdUp>
                <hr/>
            </Hidden>
            <Products/>
        </Fragment>
    )
}

export default HomePage;