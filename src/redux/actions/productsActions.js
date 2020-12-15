import { PRODUCTS_ACTIONS } from "./actionsTypes";
import { API_HOST, PRODUCTS_URL } from "../../config";

const fetchProductsStart = {
    type: PRODUCTS_ACTIONS.FETCH_PRODUCTS_START
};

const fetchProductsSuccess = {
    type: PRODUCTS_ACTIONS.FETCH_PRODUCTS_SUCCESS
};

const fetchProductsError = {
    type: PRODUCTS_ACTIONS.FETCH_PRODUCTS_ERROR
};

export const fetchProducts = () => (dispatch) => {
    dispatch(fetchProductsStart);

    fetch(API_HOST + PRODUCTS_URL)
        .then(res => res.json())
        .then(data => {
            const products = data.products;
            dispatch({
                type: PRODUCTS_ACTIONS.SET_PRODUCTS,
                payload: products
            });
            dispatch(fetchProductsSuccess);
        })
        .catch(() => dispatch(fetchProductsError))
};

export const setProductsSortType = (sortType) => {
    return {
        type: PRODUCTS_ACTIONS.SET_PRODUCTS_SORT_TYPE,
        payload: sortType
    }
};