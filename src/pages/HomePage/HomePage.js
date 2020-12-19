import React from "react";
import Categories from "../../components/Categories/Categories";
import Hidden from "../../components/Hidden/Hidden";
import Products from "../../components/Products/Products";
import Divider from "../../components/Divider/Divider";
import "./HomePage.scss"

const HomePage = () => {
    return(
        <div className="HomePage">
            <Categories/>
            <Hidden mdUp>
                <Divider className="HomePage-Divider"/>
            </Hidden>
            <Products/>
        </div>
    )
}

export default HomePage;