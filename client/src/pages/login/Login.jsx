import "./login.css"

const Login = () => {
    return (
        <div className="login">
            <span className="login-title">Login</span>
            <form action="" className="login-form">
                <label>Email</label>
                <input type="email" className="login-input" placeholder="Enter your email ..." />
                <label >Password</label>
                <input type="password" className="login-input" placeholder="Enter your password ..." />
                <button className="login-button">Login</button>
            </form>
            <button className="login-register">Create new Account</button>
        </div>
    )
}

export default Login
