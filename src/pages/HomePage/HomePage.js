import React from "react";
import Categories from "../../components/Categories/Categories";
import Hidden from "../../components/Hidden/Hidden";
import Products from "../../components/Products/Products";
import Divider from "../../components/Divider/Divider";
import "./HomePage.scss"

const HomePage = () => {
    return(
        <div className="HomePage">
            <Categories className="HomePage-Categories"/>
            <Hidden smUp>
                <Divider className="HomePage-Divider"/>
            </Hidden>
            <Products className="HomePage-Products"/>
        </div>
    )
}

export default HomePage;