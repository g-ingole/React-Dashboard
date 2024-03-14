import React, { useState } from 'react';
import './SiLo.css';
import { useNavigate, Link } from "react-router-dom";

const SignUp = ({ onSignUp, onSignIn }) => {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };
    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };

    // new Code here for auth
    const navigate = useNavigate();

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        // Signup logic 
        onSignUp();
        navigate("/home")
    };

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        // Signin logic 
        onSignIn();
        navigate("/home")
    };

    // `````````
    return (
        <div>

            <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>

                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="/" className="sign-in-form" onSubmit={handleSignInSubmit}>
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user" />
                                <input type="text" placeholder="Username" autoComplete="text" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock" />
                                <input type="password" placeholder="Password" autoComplete="password" />
                            </div>
                            <Link to="/resetpass" style={{ textDecoration: "none" }}>
                                <h4 >Forgot Your Password ?</h4>
                            </Link>
                            <input type="submit" defaultValue="Login" className="btn solid" autoComplete="submit" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="/" className="social-icon">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="/" className="social-icon">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="/" className="social-icon">
                                    <i className="fab fa-google" />
                                </a>
                                <a href="/" className="social-icon">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </form>
                        <form action="/" className="sign-up-form" onSubmit={handleSignUpSubmit}>
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user" />
                                <input type="text" placeholder="Username" autoComplete="text" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope" />
                                <input type="email" placeholder="Email" autoComplete="email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock" />
                                <input type="password" placeholder="Password" autoComplete="password" />
                            </div>
                            <Link to="/resetpass" style={{ textDecoration: "none" }}>
                                <h4 >Forgot Your Password ?</h4>
                            </Link>
                            <input type="submit" className="btn" defaultValue="Sign up" autoComplete="submit" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="/" className="social-icon">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="/" className="social-icon">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="/" className="social-icon">
                                    <i className="fab fa-google" />
                                </a>
                                <a href="/" className="social-icon">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <h3>Welcome to kizora software</h3>
                            <p>Transform ideas into reality With a motivation for delivering time-deiven excellence!</p>
                            <button className="btn transparent" onClick={handleSignUpClick}>
                                Sign up
                            </button>
                        </div>
                        <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
                            <button className="btn transparent" onClick={handleSignInClick}>
                                Sign in
                            </button>
                        </div>
                        <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignUp;