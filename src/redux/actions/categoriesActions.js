import { CATEGORIES_ACTIONS } from "./actionsTypes";
import { API_HOST, CATEGORIES_URL } from "../../config";

const fetchCategoriesStart = {
    type: CATEGORIES_ACTIONS.FETCH_CATEGORIES_START
};

const fetchCategoriesSuccess = {
    type: CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCESS
};

const fetchCategoriesError = {
    type: CATEGORIES_ACTIONS.FETCH_CATEGORIES_ERROR
};

export const fetchCategories = () => (dispatch) => {
    dispatch(fetchCategoriesStart);

    fetch(API_HOST + CATEGORIES_URL)
        .then(res => res.json())
        .then(data => {
            const categories = data.categories;
            dispatch({
                type: CATEGORIES_ACTIONS.SET_CATEGORIES,
                payload: categories
            });
            dispatch(fetchCategoriesSuccess);
        })
        .catch(() => dispatch(fetchCategoriesError))
};