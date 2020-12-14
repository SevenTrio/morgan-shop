import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png'
import './Logo.scss'

const Logo = ({ className = "" }) => {
    return (
        <div className={`Logo ${className}`}>
            <Link to="/" className="Logo-Link">
                <img src={logo} alt="Morgan Shop" className="Logo-Image"/>
            </Link>
        </div>
    );
};

export default Logo;