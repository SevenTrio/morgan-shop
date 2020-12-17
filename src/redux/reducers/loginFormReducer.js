import { LOGIN_FORM_ACTIONS } from "../actions/actionsTypes";

const initialState = {
    fields: {
        email: "",
        password: "",
    },
    errors: {
        email: "",
        password: "",
    },
    validated: {
        email: false,
        password: false,
    },
}

const registrationFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FORM_ACTIONS.SET_LOGIN_FORM_FIELD_VALUE:
            return {
                ...state,
                fields: {...state.fields, [action.payload.name]: action.payload.value},
            };

        case LOGIN_FORM_ACTIONS.SET_LOGIN_FORM_FIELD_ERROR:
            return {
                ...state,
                errors: {...state.errors, [action.payload.name]: action.payload.error},
            };

        case LOGIN_FORM_ACTIONS.VALIDATE_LOGIN_FORM_FIELD:
            return {
                ...state,
                errors: {...state.errors, [action.payload.name]: action.payload.error},
                validated: {...state.validated, [action.payload.name]: action.payload.validated},
            };

        case LOGIN_FORM_ACTIONS.CLEAR_LOGIN_FORM:
            return {
                ...initialState,
            };

        default:
            return state;
    }
};

export default registrationFormReducer;