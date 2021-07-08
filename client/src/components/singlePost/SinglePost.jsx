import "./singlePost.css"

const SinglePost = () => {
    return (
        <div className="single-post">
            <div className="single-post-wrapper">
            <img src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" className="single-post-img" />
            <h1 className="single-post-title">
                Lorem ipsum dolor sit amet.
                <div className="single-post-edit">
                    <i className="single-post-icon far fa-edit"></i>
                    <i className="single-post-icon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="single-post-info">
                <span className="single-post-author">Author: <b>Luan NT</b></span>
                <span className="single-post-date">1 hour ago</span>
            </div>
            <p className="single-post-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto et ea exercitationem aliquid laudantium libero eum blanditiis tempora voluptatibus, nihil adipisci neque commodi ipsum eligendi molestiae quae nostrum nam eaque!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptatem dolorem ipsum rem totam quod facere nam placeat nemo rerum earum architecto expedita similique vel magni, tempora blanditiis, amet optio?
            </p>
            </div>
        </div>
    )
}

export default SinglePost
