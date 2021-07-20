import "./register.css"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false)
        try {
            const res = await axios.post("/auth/register", {
                username, email, password
            })
            res.data && window.location.replace("/login");
        }
        catch (err) {
            setError(true);
        }
    }

    return (
        <div className="register">
            <span className="register-title">Register</span>
            <form action="" className="register-form" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="register-input" placeholder="Enter your username ..." onChange={e => setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="email" className="register-input" placeholder="Enter your email ..." onChange={e => setEmail(e.target.value)}/>
                <label >Password</label>
                <input type="password" className="register-input" placeholder="Enter your password ..." onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="register-button">register</button>
            </form>
            <Link to="/login">
                <button className="register-login">I had haven account</button>
            </Link>
            {error && <span className="register-err">Something went wrong!</span>}
        </div>
    )
}

export default Register
