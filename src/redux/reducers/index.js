import { combineReducers } from 'redux';

import basket from "./basketReducer";
import categories from "./categoriesReducer";
import products from "./productsReducer";

export default combineReducers({
    categories,
    products,
    basket,
});