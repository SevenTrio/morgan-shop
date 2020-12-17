import { REGISTRATION_FORM_ACTIONS } from "./actionsTypes";
import { validateFullName, validateEmail } from "../../utils";

export const setFieldError = (fieldName, error) => {
    return {
        type: REGISTRATION_FORM_ACTIONS.SET_REGISTRATION_FORM_FIELD_ERROR,
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
        type: REGISTRATION_FORM_ACTIONS.SET_REGISTRATION_FORM_FIELD_VALUE,
        payload: {
            name: name,
            value: value,
        }
    }
}

export const clearFieldError = (field) => {
    return {
        type: REGISTRATION_FORM_ACTIONS.SET_REGISTRATION_FORM_FIELD_ERROR,
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
            type: REGISTRATION_FORM_ACTIONS.VALIDATE_REGISTRATION_FORM_FIELD,
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
        case 'fullName':
            isValid = validateFullName(value);
            if (!isValid) errorMessage = "Please enter your full name";
            break;

        case 'email':
            isValid = validateEmail(value);
            if (!isValid) errorMessage = "Please make sure your email format is correct";
            break;

        case 'password':
            isValid = value.length > 6;
            if (!isValid) errorMessage = "Please enter min 6 char";
            break;

        default:
            break;
    }

    return {
        type: REGISTRATION_FORM_ACTIONS.VALIDATE_REGISTRATION_FORM_FIELD,
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

        for (let name in state.registrationForm.validated) {
            if (state.registrationForm.validated.hasOwnProperty(name)) {
                if (!state.registrationForm.validated[name]) {
                    isFormValid = false;
                    if (!state.registrationForm.errors[name].length) {
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
        type: REGISTRATION_FORM_ACTIONS.CLEAR_REGISTRATION_FORM
    }
}

