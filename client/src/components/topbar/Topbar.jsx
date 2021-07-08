import "./topbar.css"
import { Link } from "react-router-dom"

const Topbar = () => {
    const user = false;
    return (
        <div className="topbar">
            <div className="topbar-right">
                <i class="top-icon fab fa-facebook-square"></i>
                <i class="top-icon fab fa-instagram-square"></i>
                <i class="top-icon fab fa-telegram"></i>
                <i class="top-icon fab fa-twitter-square"></i>
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
                    <li className="top-center-item">
                        <Link to="/login">{user && "Log out"}</Link>
                    </li >
                </ul>
            </div>
            <div className="topbar-left">
                {user ? (
                    <img 
                    src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" 
                    className="top-right-img" />
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
                
                <i class="search-icon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar
