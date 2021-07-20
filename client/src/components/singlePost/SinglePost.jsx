import "./singlePost.css"
import { useLocation } from "react-router"
import { useEffect, useState, useContext } from "react"
import axios from "axios";
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"
const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc,setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false);

    const PF = "http://localhost:8000/images/";

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("/post/"+path);

            setPost(res.data)
            setTitle(res.data.title);
            setDesc(res.data.desc)
        }
        fetchPost();
    }, [path])
    
    const handleDelete = async () => {
        try {
            await axios.delete("/post/" + post._id, {
                data: {
                    username: user.username
                }
            })
            window.location.replace("/")
        }
        catch (err) {

        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put('/post/'+post._id, {
                username: user.username,
                title: title,
                desc: desc
            })
            setUpdateMode(false);
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="single-post">
            <div className="single-post-wrapper">
                {post.photo && (
                    <img src={PF + post.photo} alt="" className="single-post-img" />
                )}
                {
                    updateMode ? <input type="text" value={title} className="single-post-title-input" autoFocus onChange={e => setTitle(e.target.value)} /> : (
                        <h1 className="single-post-title">
                            {post.title}
                            {post.username === user?.username && (
                                <div className="single-post-edit">
                                    <i className="single-post-icon far fa-edit" onClick={e=> setUpdateMode(true)}></i>
                                    <i className="single-post-icon far fa-trash-alt" onClick={handleDelete}></i>
                                </div>
                            )}
                        </h1>
                    )
                }
                
                <div className="single-post-info">
                    <span className="single-post-author">Author: 
                    <Link to={`/?user=${post.username}`}>
                        <b>{post.username}</b>
                    </Link>
                    </span>
                    <span className="single-post-date">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {
                    updateMode ? <textarea value={desc} className="single-post-desc-input" onChange={(e) => setDesc(e.target.value)}></textarea> : (
                        <p className="single-post-desc">
                            {post.desc}
                        </p>
                    )
                }
                {updateMode && (
                    <button className="single-post-button" onClick={handleUpdate}>Update</button>
                )}
            </div>
        </div>
    )
}

export default SinglePost
