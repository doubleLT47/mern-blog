import "./sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-title">About me</span>
                <img src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Impedit debitis voluptatibus cupiditate in voluptates totam aliquam, 
                    illo iste perspiciatis magni placeat. 
                    Quasi iste eveniet cum nostrum quaerat maxime aut error.</p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">Categories</span>
                <ul className="sidebar-list">
                    <li className="sidebar-list--item">Life</li>
                    <li className="sidebar-list--item">Music</li>
                    <li className="sidebar-list--item">Style</li>
                    <li className="sidebar-list--item">Tech</li>
                    <li className="sidebar-list--item">Movies</li>
                </ul>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">Follow me</span>
                <div className="sidebar-social">
                    <i class="sidebar-icon fab fa-facebook-square"></i>
                    <i class="sidebar-icon fab fa-instagram-square"></i>
                    <i class="sidebar-icon fab fa-telegram"></i>
                    <i class="sidebar-icon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
