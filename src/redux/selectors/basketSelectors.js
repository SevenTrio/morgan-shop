import { createSelector } from "reselect";

const selectBasket = (state) => state.basket;

export const selectBasketProducts = createSelector(
    [selectBasket],
    (basket) => basket.products
);