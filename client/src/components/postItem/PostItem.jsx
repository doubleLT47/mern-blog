import "./postItem.css"
import { Link } from "react-router-dom"

const PostItem = ({ post }) => {
    const PF = "http://localhost:8000/images/";
    return (
        <div className="post-item">
            {post.photo && (
                <img src={PF + post.photo} alt="" className="post-img" />
            )}
            <div className="post-info">
                <div className="post-cats">
                    {post.categories.map((category,index) => (
                        <span key={index} className="post-cat">{category}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`}>
                    <span className="post-title">
                        {post.title}
                    </span>
                </Link>
                <span className="post-date">{new Date(post.createdAt).toDateString()}</span>
                <p className="post-desc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}

export default PostItem
