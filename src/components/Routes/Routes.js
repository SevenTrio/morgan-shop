import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesList } from "../../redux/selectors/categoriesSelectors";
import HomePage from "../../pages/HomePage/HomePage";
import CategoryPage from "../../pages/CategoryPage/CategoryPage";
import BasketPage from "../../pages/BasketPage/BasketPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import ResetPasswordPage from "../../pages/ResetPasswordPage/ResetPasswordPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const Routes = () => {
    const categories = useSelector(selectCategoriesList);

    return(
        <Switch>
            <Route path="/" exact>
                <HomePage/>
            </Route>

            <Route path="/login" exact>
                <LoginPage/>
            </Route>

            <Route path="/registration" exact>
                <RegistrationPage/>
            </Route>

            <Route path="/reset-password" exact>
                <ResetPasswordPage/>
            </Route>

            {categories && categories.map(category =>
                <Route
                    key={category.id}
                    path={"/" + category.alias}
                    exact
                >
                    <CategoryPage category={category}/>
                </Route>
            )}

            <Route path="/basket" exact>
                <BasketPage/>
            </Route>

            {/*to work properly on github pages*/}
            <Route path="/morgan-shop" exact>
                <Redirect to="/"/>
            </Route>

            <Route path="*">
                <NotFoundPage/>
            </Route>
        </Switch>
    )
}

export default Routes;