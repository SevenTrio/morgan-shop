import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesList } from "../../redux/selectors/categoriesSelectors";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";
import Basket from "../Basket/Basket";
import Hidden from "../Hidden/Hidden";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import ResetPassword from "../ResetPassword/ResetPassword";
import NotFound from "../NotFound/NotFound";

const Routes = () => {
    const categories = useSelector(selectCategoriesList);

    return(
        <Switch>
            <Route path="/" exact>
                <Categories/>
                <Hidden mdUp>
                    <hr/>
                </Hidden>
                <Products/>
            </Route>

            <Route path="/login" exact>
                <Login/>
            </Route>

            <Route path="/registration" exact>
                <Registration/>
            </Route>

            <Route path="/reset-password" exact>
                <ResetPassword/>
            </Route>

            {categories && categories.map(category =>
                <Route
                    key={category.id}
                    path={"/" + category.alias}
                    exact
                >
                    <Products category={category}/>
                </Route>
            )}

            <Route path="/basket" exact>
                <Basket/>
            </Route>

            <Route path="/morgan-shop" exact>
                <Redirect to="/"/>
            </Route>

            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    )
}

export default Routes;