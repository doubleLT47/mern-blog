
import "./home.css"
import { useState, useEffect } from "react";
import { useLocation } from "react-router"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Post from "../../components/post/Post"
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("/post"+search);

            setPosts(res.data);
        }
        fetchPost();
    }, [search])
    return (
        <>
            <Header />
            <div className="home">
                <Post posts={posts}/>
                <Sidebar />
            </div>
        </>
    )
}

export default Home
