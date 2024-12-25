import React, { useEffect, useState } from 'react'
import './signup.css'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Navigate } from "react-router-dom"

const Signup = () => {
    const [action, setAction] = useState("Sign Up");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    if (isLoggedIn) {
        return <Navigate to="/home" />;
    }

    return (

        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {/* username */}
                {action === "Login" ? <div></div> : <div className="input">
                    <FaUser />Username:
                    <input type="text" />
                </div>}

                {/* email */}
                <div className="input">
                    <MdEmail />Email:
                    <input type="email" />
                </div>
                {/* password */}
                <div className="input">
                    <RiLockPasswordFill />password:
                    <input type="password" />
                </div>
            </div>
            {/* forget pass */}
            {action === "Login" ? <div></div> : <div className="forget-pass">
                <span>forget password?</span>
            </div>}

            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { 
                     handleLogin();
                    setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={() => {
                        handleLogin();
                        setAction("Login");
                    }}
                >
                    Login
                </div>

            </div>

        </div>
    )
}

export default Signup