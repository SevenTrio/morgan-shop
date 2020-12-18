import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFieldValue, validateField, clearFieldError, submitForm} from "../../redux/actions/registrationFormActions";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import Hidden from "../../components/Hidden/Hidden";
import { ReactComponent as GoogleIcon } from './ic_google.svg';
import { ReactComponent as FacebookIcon } from './ic_facebook.svg';
import "./RegistrationPage.scss"

const RegistrationPage = () => {
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
        <div className="RegistrationPage">
            <div className="RegistrationPage-Container">
                <h1 className="RegistrationPage-Heading">Create account</h1>
                <div className="RegistrationPage-Form">
                    <TextField
                        id="fullName"
                        name="fullName"
                        label="Full Name"
                        className="RegistrationPage-Field RegistrationPage-Field_fullName"
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
                        className="RegistrationPage-Field RegistrationPage-Field_email"
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
                        className="RegistrationPage-Field RegistrationPage-Field_password"
                        placeholder="Enter your password"
                        type="password"
                        value={fields.password}
                        onFocus={handleClearError}
                        onChange={handleChange}
                        onBlur={handleValidateField}
                        error={errors.password}
                    />

                    <p className="RegistrationPage-PrivacyPolicy">
                        By creating an account you agree to the website
                        <Link to="/terms-and-conditions" className="RegistrationPage-PrivacyPolicyLink">
                            terms and conditions
                        </Link>
                        and our
                        <Link to="/privacy-notice" className="RegistrationPage-PrivacyPolicyLink">
                            privacy notice.
                        </Link>
                    </p>

                    <Button
                        className="RegistrationPage-Button"
                        onClick={handleSubmit}
                        variant="secondary"
                    >
                        CREATE AN ACCOUNT
                    </Button>

                    <div className="RegistrationPage-Login">
                        <span className="RegistrationPage-LoginText">
                            Have an account?
                        </span>
                        <Link to="/login" className="RegistrationPage-LoginLink">
                            Login
                        </Link>
                    </div>

                    <div className="RegistrationPage-Hr"/>

                    <div className="RegistrationPage-FastRegistration">
                        <Button
                            className="RegistrationPage-FastRegistrationButton"
                        >
                            <GoogleIcon className="RegistrationPage-FastRegistrationIcon"/>
                            <Hidden smDown>
                                With Google
                            </Hidden>
                        </Button>
                        <Button
                            className="RegistrationPage-FastRegistrationButton"
                        >
                            <FacebookIcon className="RegistrationPage-FastRegistrationIcon"/>
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

export default RegistrationPage;