import { createSelector } from "reselect";

const selectCategories = (state) => state.categories;

export const selectCategoriesList = createSelector(
    [selectCategories],
    (categories) => categories.categories
);

export const selectCategoryByAlias = (alias) => (
    createSelector([selectCategoriesList], (categories) =>
        categories.find((category) => category.alias === alias)
    )
);

export const selectCategoriesSortedByMenuOrder = () => (
    createSelector([selectCategoriesList], (categories) =>
        categories.slice().sort((a, b) =>
            a.menuOrder - b.menuOrder
        )
    )
)