import React from "react";
import { Link } from "react-router-dom";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import Hidden from "../Hidden/Hidden";
import { ReactComponent as GoogleIcon } from './ic_google.svg';
import { ReactComponent as FacebookIcon } from './ic_facebook.svg';
import "./Login.scss"

const Login = () => {
    return(
        <div className="Login">
            <div className="Login-Container">
                <h1 className="Login-Heading">Login</h1>
                <div className="Login-Form">
                    <TextField
                        id="email"
                        label="Email"
                        className="Login-Field Login-Field_email"
                        placeholder="Enter your email"
                        error=""
                    />

                    <TextField
                        id="password"
                        label="Password"
                        className="Login-Field Login-Field_password"
                        placeholder="Enter your password"
                        type="password"
                        error=""
                        showForgotPasswordHint
                    />

                    <Button
                        className="Login-Button"
                        onClick={() => console.log("login click")}
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