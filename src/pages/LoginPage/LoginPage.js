import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFieldValue, validateField, clearFieldError, submitForm} from "../../redux/actions/loginFormActions";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import Hidden from "../../components/Hidden/Hidden";
import Divider from "../../components/Divider/Divider";
import { ReactComponent as GoogleIcon } from './ic_google.svg';
import { ReactComponent as FacebookIcon } from './ic_facebook.svg';
import "./LoginPage.scss"

const LoginPage = () => {
    const dispatch = useDispatch();
    const fields = useSelector((state) => state.loginForm.fields);
    const errors = useSelector((state) => state.loginForm.errors);

    const handleChange = (e) => {
        const field = e.target;
        dispatch(setFieldValue(field));
    };

    const handleValidateField = (e) => {
        const field = e.target;
        dispatch(validateField(field));
    }

    const handleClearError = (e) => {
        const field = e.target;
        dispatch(clearFieldError(field));
    }

    const handleSubmit = () => {
        dispatch(submitForm());
    };
    
    return(
        <div className="LoginPage">
            <div className="LoginPage-Container">
                <h1 className="LoginPage-Heading">Login</h1>
                <div className="LoginPage-Form">
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        className="LoginPage-Field LoginPage-Field_email"
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
                        className="LoginPage-Field LoginPage-Field_password"
                        placeholder="Enter your password"
                        type="password"
                        value={fields.password}
                        onFocus={handleClearError}
                        onChange={handleChange}
                        onBlur={handleValidateField}
                        error={errors.password}
                        showForgotPasswordHint
                    />

                    <Button
                        className="LoginPage-Button"
                        onClick={handleSubmit}
                        variant="secondary"
                    >
                        LOG IN
                    </Button>

                    <div className="LoginPage-CreateAccount">
                        <span className="LoginPage-CreateAccountText">
                            Don't have an account?
                        </span>
                        <Link to="/registration" className="LoginPage-CreateAccountLink">
                            Create an account
                        </Link>
                    </div>

                    <Divider className="LoginPage-Divider" text="or"/>

                    <div className="LoginPage-FastLogin">
                        <Button
                            className="LoginPage-FastLoginButton"
                        >
                            <GoogleIcon className="LoginPage-FastLoginIcon"/>
                            <Hidden smDown>
                                With Google
                            </Hidden>
                        </Button>
                        <Button
                            className="LoginPage-FastLoginButton"
                        >
                            <FacebookIcon className="LoginPage-FastLoginIcon"/>
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

export default LoginPage;