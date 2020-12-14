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