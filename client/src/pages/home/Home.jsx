
import "./home.css"

import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Post from "../../components/post/Post"

const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                <Post />
                <Sidebar />
            </div>
        </>
    )
}

export default Home
