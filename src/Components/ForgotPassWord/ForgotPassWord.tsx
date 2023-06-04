import "./styles.css";

export default function ForgotPassWord() {
    return (
        <div className="box">
            <form autoComplete="off">
                <h2>Reset Your Password</h2>
                <div className="inputBox">
                    <input type="text" required />
                    <span>Email</span>
                    <i></i>
                </div>

                <div className="links">
                    <a href="/login">Login</a>
                    <a href="/signup">Signup</a>
                </div>
                <input type="submit" value="Reset Password" />
            </form>
        </div>
    );
}
