import React, { useState } from "react";
import "./styles.css";
import { UPDATE_IS_LOGGED_IN_STATUS } from "../../store/general/actionCreators";
import { store } from "../../index";

export default function Login() {
    let url = "http://127.0.0.1:5000";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const loginBack = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("loginBack");
        fetch(`${url}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.access_token) {
                    console.log(data);
                    localStorage.setItem("access_token", data.access_token);
                    store.dispatch(UPDATE_IS_LOGGED_IN_STATUS(true))
                    window.location.href = "/";
                } else {
                    setIsError(true);
                    setTimeout(() => {
                        setIsError(false);
                    }, 5000);
                }
            }
            );

    }
    return (
        <div className="box">
            <form onSubmit={(e) => loginBack(e)} autoComplete="off">
                {isError && <div className="error">Username or password is incorrect</div>}
                <h2>Sign in</h2>
                <div className="inputBox">
                    <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" required />
                    <span>Userame</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" required />
                    <span>Password</span>
                    <i></i>
                </div>
                <div className="links">
                    <a href="/reset-password">Forgot Password ?</a>
                    <a href="/signup">Signup</a>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}
