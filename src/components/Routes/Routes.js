import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesList } from "../../redux/selectors/categoriesSelectors";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";
import Basket from "../Basket/Basket";

const Routes = () => {
    const categories = useSelector(selectCategoriesList);

    return(
        <Switch>
            <Route path="/" exact>
                <Categories/>
                <Products/>
            </Route>

            <Route path="/login" exact>
                <h1>Login</h1>
            </Route>

            <Route path="/registration" exact>
                <h1>Registration</h1>
            </Route>

            <Route path="/reset-password" exact>
                <h1>Reset password</h1>
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

            <Route path="*">
                <h1>Not Found</h1>
            </Route>
        </Switch>
    )
}

export default Routes;