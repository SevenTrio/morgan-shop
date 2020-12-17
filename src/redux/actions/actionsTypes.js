export const PRODUCTS_ACTIONS = {
    SET_PRODUCTS: "SET_PRODUCTS",
    FETCH_PRODUCTS_START: "FETCH_PRODUCTS_START",
    FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR: "FETCH_PRODUCTS_ERROR",
    SET_PRODUCTS_SORT_TYPE: "SET_PRODUCTS_SORT_TYPE",
};

export const CATEGORIES_ACTIONS = {
    SET_CATEGORIES: "SET_CATEGORIES",
    FETCH_CATEGORIES_START: "FETCH_CATEGORIES_START",
    FETCH_CATEGORIES_SUCCESS: "FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_ERROR: "FETCH_CATEGORIES_ERROR",
}

export const BASKET_ACTIONS = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
    REMOVE_ALL_COPIES_FROM_BASKET: "REMOVE_ALL_COPIES_FROM_BASKET",
    SET_BASKET_CHECKED_OUT: "SET_BASKET_CHECKED_OUT",
}

export const MENU_ACTIONS = {
    SHOW_MENU: "SHOW_MENU",
    HIDE_MENU: "HIDE_MENU",
}

export const LOGIN_FORM_ACTIONS = {
    SET_LOGIN_FORM_FIELD_VALUE: 'SET_LOGIN_FORM_FIELD_VALUE',
    SET_LOGIN_FORM_FIELD_ERROR: 'SET_LOGIN_FORM_FIELD_ERROR',
    VALIDATE_LOGIN_FORM_FIELD: 'VALIDATE_LOGIN_FORM_FIELD',
    CLEAR_LOGIN_FORM: 'CLEAR_LOGIN_FORM',
}