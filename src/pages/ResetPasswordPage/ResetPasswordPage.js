import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFieldValue, validateField, clearFieldError, submitForm} from "../../redux/actions/resetPasswordFormActions";
import Container from "../../components/Container/Container";
import PageHeading from "../../components/PageHeading/PageHeading";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import paperDoveImage from "./paper-dove.svg";
import "./ResetPasswordPage.scss"

const ResetPasswordPage = () => {
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
        <div className="ResetPasswordPage">
            <Container className="ResetPasswordPage-Container">
                {!resetPasswordForm.isSent ?
                    <Fragment>
                        <PageHeading className="ResetPasswordPage-PageHeading">Reset your password</PageHeading>
                        <div className="ResetPasswordPage-Form">
                            <p className="ResetPasswordPage-Text">
                                Enter the email address for your Morgan account and we’ll send a single-use password reset link.
                            </p>

                            <p className="ResetPasswordPage-Text">
                                This link will expire after 24 hours.
                            </p>

                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                className="ResetPasswordPage-Field ResetPasswordPage-Field_email"
                                placeholder="Enter your email"
                                value={resetPasswordForm.fields.email}
                                onFocus={handleClearError}
                                onChange={handleChange}
                                onBlur={handleValidateField}
                                error={resetPasswordForm.errors.email}
                            />

                            <Button
                                className="ResetPasswordPage-Button"
                                onClick={handleSubmit}
                                variant="secondary"
                            >
                                Send a password reset link
                            </Button>

                            <div className="ResetPasswordPage-BackToLogin">
                                <Link to="/login" className="ResetPasswordPage-BackToLoginLink">
                                    Back to login
                                </Link>
                            </div>
                        </div>
                    </Fragment>
                    :
                    <Fragment>
                        <PageHeading className="ResetPasswordPage-PageHeading">Your link has been sent</PageHeading>
                        <img src={paperDoveImage} alt="" className="ResetPasswordPage-SentImg"/>
                        <p className="ResetPasswordPage-SentText">We have sent a password reset email to your address:</p>
                        <p className="ResetPasswordPage-SentEmail">{resetPasswordForm.email}</p>
                        <p className="ResetPasswordPage-SentHint">If you can’t find the email, please check your junk folder.</p>
                    </Fragment>
                }
            </Container>
        </div>
    )
}

export default ResetPasswordPage;