import "./write.css"
import { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

const Write = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          username: user.username,
          title,
          desc: description,
        };
        if (file) {
          const data =new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          newPost.photo = filename;
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
          const res = await axios.post("/post", newPost);
          window.location.replace("/post/" + res.data._id);
        } catch (err) {}
      };

    return (
        <div className="write">
            {file && (
                <img src={URL.createObjectURL(file)} className="write-img" alt="" />
            )}
            <form action="" className="write-form" onSubmit={handleSubmit}>
                <div className="write-form-group">
                    <label htmlFor="write-input-file">
                        <i className="write-icon fas fa-plus"></i>
                    </label>
                    <input type="file" id="write-input-file" style={{display: "none"}} onChange={e => setFile(e.target.files[0])}/>
                    <input type="text" placeholder="Title" className="write-input" autoFocus={true} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="write-form-group">
                    <textarea placeholder="Write your story ..." className="write-input write-text" type="text" onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <button className="write-submit" type="submit">Publish</button>
            </form>
        </div>
    )
}

export default Write
