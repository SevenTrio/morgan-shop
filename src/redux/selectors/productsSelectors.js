import { createSelector } from "reselect";
import { getFilterByCategoryFunction, getSortingFunction } from "../../utils";

const selectProducts = (state) => state.products;

export const selectProductsList = createSelector(
    [selectProducts],
    (products) => products.products
);

export const selectProductsByCategory = (category) => (
    createSelector([selectProductsList], (products) =>
        products.filter(getFilterByCategoryFunction(category))
    )
);

export const selectProductsByCategoryWithSorting = (category, sortType) => (
    createSelector([selectProductsByCategory(category)], (products) =>
        products.slice().sort(getSortingFunction(sortType))
    )
);
