import { RESET_PASSWORD_FORM_ACTIONS } from "../actions/actionsTypes";

const initialState = {
    fields: {
        email: "",
    },
    errors: {
        email: "",
    },
    validated: {
        email: false,
    },
    isSent: false,
    email: "",
}

const resetPasswordFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_PASSWORD_FORM_ACTIONS.SET_RESET_PASSWORD_FORM_FIELD_VALUE:
            return {
                ...state,
                fields: {...state.fields, [action.payload.name]: action.payload.value},
            };

        case RESET_PASSWORD_FORM_ACTIONS.SET_RESET_PASSWORD_FORM_FIELD_ERROR:
            return {
                ...state,
                errors: {...state.errors, [action.payload.name]: action.payload.error},
            };

        case RESET_PASSWORD_FORM_ACTIONS.VALIDATE_RESET_PASSWORD_FORM_FIELD:
            return {
                ...state,
                errors: {...state.errors, [action.payload.name]: action.payload.error},
                validated: {...state.validated, [action.payload.name]: action.payload.validated},
            };

        case RESET_PASSWORD_FORM_ACTIONS.CLEAR_RESET_PASSWORD_FORM:
            return {
                ...initialState,
                isSent: true,
                email: state.fields.email,
            };

        default:
            return state;
    }
};

export default resetPasswordFormReducer;