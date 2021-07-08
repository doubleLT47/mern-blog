import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header-titles">
                <span className="header-title-sm">React, Node, MongoDB & Express</span>
                <span className="header-title-lg">Blog</span>
            </div>
            <img src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" className="header-img" />
        </div>
    )
}

export default Header
