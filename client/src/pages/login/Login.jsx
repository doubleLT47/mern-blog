import "./login.css"
import { Link } from "react-router-dom"
import { useRef, useContext } from "react";
import { Context } from "../../context/Context"
import axios from "axios"

const Login = () => {
    const usernameRef =  useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post("/auth/login", {
                username: usernameRef.current.value, 
                password: passwordRef.current.value
            });

            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        }
        catch (err) {
            dispatch({type: "LOGIN_FAILURE"});
        }
    }

    return (
        <div className="login">
            <span className="login-title">Login</span>
            <form onSubmit={handleSubmit} className="login-form">
                <label>Username</label>
                <input type="text" className="login-input" placeholder="Enter your username ..." ref={usernameRef}/>
                <label >Password</label>
                <input type="password" className="login-input" placeholder="Enter your password ..." ref={passwordRef}/>
                <button className="login-button" type="submit" disabled={isFetching}>Login</button>
            </form>
            <Link to="/register">
                <button className="login-register">Create new Account</button>
            </Link>
        </div>
    )
}

export default Login
