import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFieldValue, validateField, clearFieldError, submitForm} from "../../redux/actions/loginFormActions";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import Hidden from "../Hidden/Hidden";
import { ReactComponent as GoogleIcon } from './ic_google.svg';
import { ReactComponent as FacebookIcon } from './ic_facebook.svg';
import "./Login.scss"

const Login = () => {
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
        <div className="Login">
            <div className="Login-Container">
                <h1 className="Login-Heading">Login</h1>
                <div className="Login-Form">
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        className="Login-Field Login-Field_email"
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
                        className="Login-Field Login-Field_password"
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
                        className="Login-Button"
                        onClick={handleSubmit}
                        variant="secondary"
                    >
                        LOG IN
                    </Button>

                    <div className="Login-CreateAccount">
                        <span className="Login-CreateAccountText">
                            Don't have an account?
                        </span>
                        <Link to="/registration" className="Login-CreateAccountLink">
                            Create an account
                        </Link>
                    </div>

                    <div className="Login-Hr"/>

                    <div className="Login-FastLogin">
                        <Button
                            className="Login-FastLoginButton"
                        >
                            <GoogleIcon className="Login-FastLoginIcon"/>
                            <Hidden smDown>
                                With Google
                            </Hidden>
                        </Button>
                        <Button
                            className="Login-FastLoginButton"
                        >
                            <FacebookIcon className="Login-FastLoginIcon"/>
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

export default Login;