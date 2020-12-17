import { LOGIN_FORM_ACTIONS } from "./actionsTypes";
import { validateEmail, validatePassword } from "../../utils";

export const setFieldError = (fieldName, error) => {
    return {
        type: LOGIN_FORM_ACTIONS.SET_LOGIN_FORM_FIELD_ERROR,
        payload: {
            name: fieldName,
            error: error,
        }
    }
}

export const setFieldValue = (field) => {
    let name = field.name;
    let value = field.type === "checkbox" ? field.checked : field.value;
    return {
        type: LOGIN_FORM_ACTIONS.SET_LOGIN_FORM_FIELD_VALUE,
        payload: {
            name: name,
            value: value,
        }
    }
}

export const clearFieldError = (field) => {
    return {
        type: LOGIN_FORM_ACTIONS.SET_LOGIN_FORM_FIELD_ERROR,
        payload: {
            name: field.name,
            error: "",
        }
    }
}

export const validateField = (field) => {
    const value = field.type === "checkbox" ? field.checked : field.value;
    const name = field.name;

    if (!/\S/.test(value)) {
        return {
            type: LOGIN_FORM_ACTIONS.VALIDATE_LOGIN_FORM_FIELD,
            payload: {
                name: name,
                error: "This field cannot be empty",
                validated: false,
            }
        }
    }

    let isValid;
    let errorMessage = "";

    switch(name) {
        case 'email':
            isValid = validateEmail(value);
            if (!isValid) errorMessage = "Please make sure your email format is correct";
            break;

        case 'password':
            isValid = validatePassword(value);
            if (!isValid) errorMessage = "Please enter a password that meets security standard";
            break;

        default:
            break;
    }

    return {
        type: LOGIN_FORM_ACTIONS.VALIDATE_LOGIN_FORM_FIELD,
        payload: {
            name: name,
            error: errorMessage,
            validated: isValid,
        }
    }
}

export const submitForm = () => {
    return (dispatch, getState) => {
        const state = getState();
        let isFormValid = true;

        for (let name in state.loginForm.validated) {
            if (state.loginForm.validated.hasOwnProperty(name)) {
                if (!state.loginForm.validated[name]) {
                    isFormValid = false;
                    if (!state.loginForm.errors[name].length) {
                        dispatch(setFieldError(name, "This field cannot be empty"))
                    }
                }
            }
        }

        if (isFormValid) {
            dispatch(clearForm());
            // dispatch(showSuccessMessage);
        }
    }
}

export const clearForm = () => {
    return {
        type: LOGIN_FORM_ACTIONS.CLEAR_LOGIN_FORM
    }
}

