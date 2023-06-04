import "./styles.css";

export default function Signup() {
    return (
        <div style={{ height: "484px" }} className="box">
            <form autoComplete="off">
                <h2>Sign up</h2>
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
                <div className="inputBox">
                    <input type="password" required />
                    <span>Confirm Password</span>
                    <i></i>
                </div>
                <div className="links">
                    <a href="/Login">Already have an account ? Sign in</a>
                </div>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
}
