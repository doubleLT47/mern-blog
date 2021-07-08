import "./write.css"
const Write = () => {
    return (
        <div className="write">
            <form action="" className="write-form">
                <img src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" className="write-img" alt="" />
                <div className="write-form-group">
                    <label htmlFor="write-input-file">
                        <i className="write-icon fas fa-plus"></i>
                    </label>
                    <input type="file" id="write-input-file" style={{display: "none"}} />
                    <input type="text" placeholder="Title" className="write-input" autoFocus={true} />
                </div>
                <div className="write-form-group">
                    <textarea placeholder="Write your story ..." className="write-input write-text" type="text"></textarea>
                </div>
                <button className="write-submit">Publish</button>
            </form>
        </div>
    )
}

export default Write
