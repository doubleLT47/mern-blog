import "./setting.css"

import Sidebar from "../../components/sidebar/Sidebar"
import { useContext, useState, useEffect } from "react"
import { Context } from "../../context/Context"
import axios from "axios"

const Setting = () => {
    const { user, dispatch } = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false);

    const PF = "http://localhost:8000/images/";

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch({type: "UPDATE_START"})
        const updateUser = {
          userId: user._id,
          username, 
          email, 
          password
        };
        if (file) {
          const data =new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          updateUser.profilePicture = filename;
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
          const res = await axios.put("/user/" + user._id, updateUser);
          setSuccess(true);
          dispatch({type: "UPDATE_SUCCESS", payload: res.data})
        } catch (err) {
            dispatch({type: "UPDATE_FAILURE"})
        }
      };
    
    return (
        <div className="setting">
            <div className="setting-wrapper">
                <div className="setting-title">
                    <div className="setting-update--title">Update your Account</div>
                    <div className="setting-delete--title">Delete Account</div>
                </div>
                <form action="" className="setting-form" onSubmit={handleSubmit}>
                    <label htmlFor="">Profile Picture</label>
                    <div className="setting-profile-picture">
                        <img src={file ? URL.createObjectURL(file) : user.profilePicture ? PF + user.profilePicture : PF+"noAvatar.png"} alt="" />
                        <label htmlFor="file-input">
                            <i className="setting-pp-icon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="file-input" style={{display: "none"}} onChange={e => setFile(e.target.files[0])}/>
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)}/>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder={user.email} onChange={e => setEmail(e.target.value)}/>
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                    <button className="setting-submit" type="submit">Update</button>
                    {success && <span style={{color: "green", textAlign: "center", marginTop: "20px"}}>Profile has been updated</span>}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Setting
