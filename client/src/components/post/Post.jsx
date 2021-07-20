import "./post.css";

import PostItem from "../postItem/PostItem";

const Post = ({posts}) => {
    return (
        <div className="post">
            {posts.map(post => (
                <PostItem key={post._id} post={post}/>
            ))}
        </div>
    )
}

export default Post
