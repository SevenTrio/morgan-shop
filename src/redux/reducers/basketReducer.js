import { BASKET_ACTIONS } from "../actions/actionsTypes";

const initialState = {
    products: [],
    totalQty: 0,
}

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case BASKET_ACTIONS.ADD_TO_BASKET:
            if (state.products.some(product => product.id === action.payload.id)) {
                // increase qty if item already exists in cart
                const products = state.products.map(product => (
                    product.id === action.payload.id
                        ? { ...product, qty: product.qty + 1 }
                        : product
                ));
                return { ...state, products, totalQty: state.totalQty + 1 }
            }
            // else add the new product to cart
            return {
                ...state,
                products: [
                    ...state.products,
                    { ...action.payload, qty: 1 }
                ],
                totalQty: state.totalQty + 1
            }

        case BASKET_ACTIONS.REMOVE_FROM_BASKET:
            const products = state.products
                .map(product => (
                    product.id === action.payload.id
                        ? { ...product, qty: product.qty - 1 }
                        : product
                ))
                .filter(product => product.qty > 0);
            return { ...state, products, totalQty: state.totalQty - 1 }

        default:
            return state;
    }
};

export default basketReducer;