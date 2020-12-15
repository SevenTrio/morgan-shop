import { BASKET_ACTIONS } from "./actionsTypes";

export const addToBasket = (product) => {
    return {
        type: BASKET_ACTIONS.ADD_TO_BASKET,
        payload: product
    }
};

export const removeFromBasket = (product) => {
    return {
        type: BASKET_ACTIONS.REMOVE_FROM_BASKET,
        payload: product
    }
};

export const removeAllCopiesFromBasket = (product) => {
    return {
        type: BASKET_ACTIONS.REMOVE_ALL_COPIES_FROM_BASKET,
        payload: product
    }
};

export const setBasketCheckedOut = () => {
    return {
        type: BASKET_ACTIONS.SET_BASKET_CHECKED_OUT,
    }
}

