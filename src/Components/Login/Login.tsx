import React, { useState } from "react";
import "./styles.css";

export default function Login() {
    return (
        <div className="box">
            <form autoComplete="off">
                <h2>Sign in</h2>
                <div className="inputBox">
                    <input type="text" required />
                    <span>Userame</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="password" required />
                    <span>Password</span>
                    <i></i>
                </div>
                <div className="links">
                    <a href="#">Forgot Password ?</a>
                    <a href="#">Signup</a>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}
