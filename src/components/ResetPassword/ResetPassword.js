import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFieldValue, validateField, clearFieldError, submitForm} from "../../redux/actions/resetPasswordFormActions";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import paperDoveImage from "./paper-dove.svg";
import "./ResetPassword.scss"

const ResetPassword = () => {
    const dispatch = useDispatch();
    const resetPasswordForm = useSelector((state) => state.resetPasswordForm);

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
        <div className="ResetPassword">
            <div className="ResetPassword-Container">
                {!resetPasswordForm.isSent ?
                    <Fragment>
                        <h1 className="ResetPassword-Heading">RESET YOUR PASSWORD</h1>
                        <div className="ResetPassword-Form">
                            <p className="ResetPassword-Text">
                                Enter the email address for your Morgan account and we’ll send a single-use password reset link.
                            </p>

                            <p className="ResetPassword-Text">
                                This link will expire after 24 hours.
                            </p>

                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                className="ResetPassword-Field ResetPassword-Field_email"
                                placeholder="Enter your email"
                                value={resetPasswordForm.fields.email}
                                onFocus={handleClearError}
                                onChange={handleChange}
                                onBlur={handleValidateField}
                                error={resetPasswordForm.errors.email}
                            />

                            <Button
                                className="ResetPassword-Button"
                                onClick={handleSubmit}
                                variant="secondary"
                            >
                                SEND A PASSWORD RESET LINK
                            </Button>

                            <div className="ResetPassword-BackToLogin">
                                <Link to="/login" className="ResetPassword-BackToLoginLink">
                                    Back to login
                                </Link>
                            </div>
                        </div>
                    </Fragment>
                    :
                    <Fragment>
                        <h1 className="ResetPassword-Heading">YOUR LINK HAS BEEN SENT</h1>
                        <img src={paperDoveImage} alt="" className="ResetPassword-SentImg"/>
                        <p className="ResetPassword-SentText">We have sent a password reset email to your address:</p>
                        <p className="ResetPassword-SentEmail">{resetPasswordForm.email}</p>
                        <p className="ResetPassword-SentHint">If you can’t find the email, please check your junk folder.</p>
                    </Fragment>
                }

            </div>
        </div>
    )
}

export default ResetPassword;