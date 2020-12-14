import { CATEGORIES_ACTIONS } from "../actions/actionsTypes";

const initialState = {
    categories: [],
    isLoading: false,
    isError: false,
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIES_ACTIONS.SET_CATEGORIES:
            return { ...state, categories: action.payload };

        case CATEGORIES_ACTIONS.FETCH_CATEGORIES_START:
            return { ...state, isLoading: true };

        case CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCESS:
            return { ...state, isLoading: false, isError: false };

        case CATEGORIES_ACTIONS.FETCH_CATEGORIES_ERROR:
            return { ...state, isLoading: false, isError: true };

        default:
            return state;
    }
};

export default categoriesReducer;