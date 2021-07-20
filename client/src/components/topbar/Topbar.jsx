import "./topbar.css"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import { useContext } from "react"

const Topbar = () => {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:8000/images/";

    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }

    return (
        <div className="topbar">
            <div className="topbar-right">
                <i className="top-icon fab fa-facebook-square"></i>
                <i className="top-icon fab fa-instagram-square"></i>
                <i className="top-icon fab fa-telegram"></i>
                <i className="top-icon fab fa-twitter-square"></i>
            </div>
            <div className="topbar-center">
                <ul className="top-center-list">
                    <li className="top-center-item">
                        <Link to="/">Home</Link>
                    </li >
                    <li className="top-center-item">
                        <Link to="/single">About me</Link>
                    </li >
                    <li  className="top-center-item">
                        <Link to="/">Contact</Link>
                    </li >
                    <li className="top-center-item">
                        <Link to="/write">Write</Link>
                    </li >
                    <li className="top-center-item" onClick={handleLogout}>
                        {user && "Log out"}
                    </li >
                </ul>
            </div>
            <div className="topbar-left">
                {user ? (
                    <Link to="/setting">
                        <img 
                        src={user.profilePicture ? PF + user.profilePicture : PF+"noAvatar.png"} alt="" 
                        className="top-right-img" />
                    </Link>
                ) : (
                    <>
                        <ul className="top-list">
                            <li className="top-list-item">
                                <Link className="link" to="/login">Log in</Link>
                            </li>
                            <li className="top-list-item">
                                <Link className="link" to="/register">Register</Link>
                            </li>
                        </ul>
                    </>
                )}
                
                <i className="search-icon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar
