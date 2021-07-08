import "./register.css"

const Register = () => {
    return (
        <div className="register">
            <span className="register-title">Register</span>
            <form action="" className="register-form">
                <label>Username</label>
                <input type="text" className="register-input" placeholder="Enter your username ..."/>
                <label>Email</label>
                <input type="email" className="register-input" placeholder="Enter your email ..." />
                <label >Password</label>
                <input type="password" className="register-input" placeholder="Enter your password ..." />
                <button className="register-button">register</button>
            </form>
            <button className="register-login">I had haven account</button>
        </div>
    )
}

export default Register
