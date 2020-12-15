import { createSelector } from "reselect";

const selectBasket = (state) => state.basket;

export const selectBasketProducts = createSelector(
    [selectBasket],
    (basket) => basket.products
);

export const selectBasketTotalQuantity = createSelector(
    [selectBasketProducts],
    (products) => {
        return products.reduce(((acc, product) =>
            acc + product.qty
        ), 0)
    }
);

export const selectBasketEstimatePrice = createSelector(
    [selectBasketProducts],
    (products) => {
        return products.reduce(((acc, product) =>
            acc + Number(product.price) * product.qty
        ), 0)
    }
);