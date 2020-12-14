import { PRODUCTS_ACTIONS } from "../actions/actionsTypes";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    sortType: {
        alias: "newness",
        title: "Newness",
    },
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_ACTIONS.SET_PRODUCTS:
            return { ...state, products: action.payload };

        case PRODUCTS_ACTIONS.FETCH_PRODUCTS_START:
            return { ...state, isLoading: true };

        case PRODUCTS_ACTIONS.FETCH_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, isError: false };

        case PRODUCTS_ACTIONS.FETCH_PRODUCTS_ERROR:
            return { ...state, isLoading: false, isError: true };

        case PRODUCTS_ACTIONS.SET_PRODUCTS_SORT_TYPE:
            return { ...state, sortType: action.payload };

        default:
            return state;
    }
};

export default productsReducer;