import { BASKET_ACTIONS } from "../actions/actionsTypes";

const initialState = {
    products: [],
    isCheckedOut: false,
}

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case BASKET_ACTIONS.ADD_TO_BASKET:
            if (state.products.some(product => product.id === action.payload.id)) {
                // increase qty if item already exists in cart
                return {
                    ...state,
                    products: state.products.map(product => (
                        product.id === action.payload.id
                            ? { ...product, qty: product.qty + 1 }
                            : product
                    )),
                }
            }
            // else add the new product to cart
            return {
                ...state,
                products: [
                    ...state.products,
                    { ...action.payload, qty: 1 }
                ],
                isCheckedOut: false,
            };

        case BASKET_ACTIONS.REMOVE_FROM_BASKET:
            const products = state.products
                .map(product => (
                    product.id === action.payload.id
                        ? { ...product, qty: product.qty - 1 }
                        : product
                ))
                .filter(product => product.qty > 0);
            return {
                ...state,
                products,
            };

        case BASKET_ACTIONS.REMOVE_ALL_COPIES_FROM_BASKET:
            return {
                ...state,
                products: state.products.filter(product =>
                    product.id !== action.payload.id
                ),
            };

        case BASKET_ACTIONS.SET_BASKET_CHECKED_OUT:
            return {
                ...state,
                products: [],
                isCheckedOut: true
            }

        default:
            return state;
    }
};

export default basketReducer;