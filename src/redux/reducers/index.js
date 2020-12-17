import { combineReducers } from 'redux';

import basket from "./basketReducer";
import categories from "./categoriesReducer";
import products from "./productsReducer";
import menu from "./menuReducer";
import loginForm from "./loginFormReducer";
import registrationForm from "./registrationFormReducer";
import resetPasswordForm from "./resetPasswordFormReducer";

export default combineReducers({
    categories,
    products,
    basket,
    menu,
    loginForm,
    registrationForm,
    resetPasswordForm,
});