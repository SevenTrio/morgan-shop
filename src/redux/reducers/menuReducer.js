import { MENU_ACTIONS } from "../actions/actionsTypes";

const initialState = {
    open: false,
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENU_ACTIONS.SHOW_MENU:
            return { ...state, open: true };

        case MENU_ACTIONS.HIDE_MENU:
            return { ...state, open: false };

        default:
            return state;
    }
};

export default productsReducer;