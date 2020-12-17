import { REGISTRATION_FORM_ACTIONS } from "../actions/actionsTypes";

const initialState = {
    fields: {
        fullName: "",
        email: "",
        password: "",
    },
    errors: {
        fullName: "",
        email: "",
        password: "",
    },
    validated: {
        fullName: "",
        email: false,
        password: false,
    },
}

const registrationFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_FORM_ACTIONS.SET_REGISTRATION_FORM_FIELD_VALUE:
            return {
                ...state,
                fields: {...state.fields, [action.payload.name]: action.payload.value},
            };

        case REGISTRATION_FORM_ACTIONS.SET_REGISTRATION_FORM_FIELD_ERROR:
            return {
                ...state,
                errors: {...state.errors, [action.payload.name]: action.payload.error},
            };

        case REGISTRATION_FORM_ACTIONS.VALIDATE_REGISTRATION_FORM_FIELD:
            return {
                ...state,
                errors: {...state.errors, [action.payload.name]: action.payload.error},
                validated: {...state.validated, [action.payload.name]: action.payload.validated},
            };

        case REGISTRATION_FORM_ACTIONS.CLEAR_REGISTRATION_FORM:
            return {
                ...initialState,
            };

        default:
            return state;
    }
};

export default registrationFormReducer;