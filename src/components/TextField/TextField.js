import React, {useState} from "react";
import { Link } from "react-router-dom";
import { ReactComponent as EyeOnIcon } from './ic_eye_on.svg';
import { ReactComponent as EyeOffIcon } from './ic_eye_off.svg';
import "./TextField.scss"

const TextField = ({
    id,
    label,
    className = "",
    placeholder = "",
    error = "",
    type = "text",
    showForgotPasswordHint = false,
    value = "Test",
    onChange,
    ...props
}) => {
    const [hidePassword, setHidePassword] = useState(true);

    const isPasswordField = type === "password";

    const handleShowPassword = () => {
        setHidePassword(false)
    }

    const handleHidePassword = () => {
        setHidePassword(true)
    }

    error = "Some dangerous error";

    return(
        <div className={`TextField ${error.length ? "TextField_error" : ""} ${className}`}>
            <div className="TextField-Hints">
                <label htmlFor={id} className="TextField-Label">{label}</label>

                {showForgotPasswordHint &&
                    <Link to="/reset-password" className="TextField-ForgotPassword">
                        Forgotten your password?
                    </Link>
                }
            </div>

            <div className="TextField-InputWrapper">
                <input
                    id={id}
                    type={isPasswordField && hidePassword ? "password" :"text"}
                    className={`TextField-Input ${isPasswordField ? "TextField-Input_password" : ""}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    {...props}
                />

                {isPasswordField && value && value.length && (hidePassword
                    ?
                    <EyeOffIcon className="TextField-Icon" onClick={handleShowPassword}/>
                    :
                    <EyeOnIcon className="TextField-Icon"  onClick={handleHidePassword}/>
                )}
            </div>

            {error.length
                ?
                <span className="TextField-Error">{error}</span>
                :
                null
            }
        </div>
    )
}

export default TextField;