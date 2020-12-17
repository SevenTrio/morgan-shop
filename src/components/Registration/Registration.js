import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFieldValue, validateField, clearFieldError, submitForm} from "../../redux/actions/registrationFormActions";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import Hidden from "../Hidden/Hidden";
import { ReactComponent as GoogleIcon } from './ic_google.svg';
import { ReactComponent as FacebookIcon } from './ic_facebook.svg';
import "./Registration.scss"

const Registration = () => {
    const dispatch = useDispatch();
    const fields = useSelector((state) => state.registrationForm.fields);
    const errors = useSelector((state) => state.registrationForm.errors);

    const handleChange = (e) => {
        const field = e.target;
        dispatch(setFieldValue(field));
    };

    const handleValidateField = (e) => {
        const field = e.target;
        dispatch(validateField(field));
    }

    const handleClearError = (e) => {
        console.log(e);
        const field = e.target;
        dispatch(clearFieldError(field));
    }

    const handleSubmit = () => {
        dispatch(submitForm());
    };

    return(
        <div className="Registration">
            <div className="Registration-Container">
                <h1 className="Registration-Heading">Create account</h1>
                <div className="Registration-Form">
                    <TextField
                        id="fullName"
                        name="fullName"
                        label="Full Name"
                        className="Registration-Field Registration-Field_fullName"
                        placeholder="Enter your email"
                        value={fields.fullName}
                        onFocus={handleClearError}
                        onChange={handleChange}
                        onBlur={handleValidateField}
                        error={errors.fullName}
                    />

                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        className="Registration-Field Registration-Field_email"
                        placeholder="Enter your email"
                        value={fields.email}
                        onFocus={handleClearError}
                        onChange={handleChange}
                        onBlur={handleValidateField}
                        error={errors.email}
                    />

                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        className="Registration-Field Registration-Field_password"
                        placeholder="Enter your password"
                        type="password"
                        value={fields.password}
                        onFocus={handleClearError}
                        onChange={handleChange}
                        onBlur={handleValidateField}
                        error={errors.password}
                    />

                    <p className="Registration-PrivacyPolicy">
                        By creating an account you agree to the website
                        <Link to="/terms-and-conditions" className="Registration-PrivacyPolicyLink">
                            terms and conditions
                        </Link>
                        and our
                        <Link to="/privacy-notice" className="Registration-PrivacyPolicyLink">
                            privacy notice.
                        </Link>
                    </p>

                    <Button
                        className="Registration-Button"
                        onClick={handleSubmit}
                        variant="secondary"
                    >
                        CREATE AN ACCOUNT
                    </Button>

                    <div className="Registration-Login">
                        <span className="Registration-LoginText">
                            Have an account?
                        </span>
                        <Link to="/login" className="Registration-LoginLink">
                            Login
                        </Link>
                    </div>

                    <div className="Registration-Hr"/>

                    <div className="Registration-FastRegistration">
                        <Button
                            className="Registration-FastRegistrationButton"
                        >
                            <GoogleIcon className="Registration-FastRegistrationIcon"/>
                            <Hidden smDown>
                                With Google
                            </Hidden>
                        </Button>
                        <Button
                            className="Registration-FastRegistrationButton"
                        >
                            <FacebookIcon className="Registration-FastRegistrationIcon"/>
                            <Hidden smDown>
                                With Facebook
                            </Hidden>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration;