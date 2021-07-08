import "./postItem.css"

const PostItem = () => {
    return (
        <div className="post-item">
            <img src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" className="post-img" />
            <div className="post-info">
                <div className="post-cats">
                    <span className="post-cat">Music</span>
                    <span className="post-cat">Life</span>
                </div>
                <span className="post-title">
                    Lorem ipsum dolor sit 
                </span>
                <span className="post-date">1 hour ago</span>
                <p className="post-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Expedita provident et explicabo? Architecto minima pariatur, 
                    sequi quam sint aspernatur praesentium ratione soluta, enim facilis, 
                    dolorem consectetur delectus recusandae nisi? Sed.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Expedita provident et explicabo? Architecto minima pariatur, 
                    sequi quam sint aspernatur praesentium ratione soluta, enim facilis, 
                    dolorem consectetur delectus recusandae nisi? Sed.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Expedita provident et explicabo? Architecto minima pariatur, 
                    sequi quam sint aspernatur praesentium ratione soluta, enim facilis, 
                    dolorem consectetur delectus recusandae nisi? Sed.
                </p>
            </div>
        </div>
    )
}

export default PostItem
